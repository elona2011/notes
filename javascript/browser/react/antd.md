# Form

get form instance

```tsx
const [form] = Form.useForm()
const register = (e: MouseEvent) => {
    let data = new FormData()
    data.append('name', form.getFieldValue('name'))
}
<Form {...layout}
    form={form}
>
    <Form.Item>
        <Button type="primary" className="login-form-button" onClick={register}>
            注册
        </Button>
    </Form.Item>
</Form>
```