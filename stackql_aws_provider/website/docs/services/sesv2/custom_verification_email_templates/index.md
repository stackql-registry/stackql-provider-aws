--- 
title: custom_verification_email_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_verification_email_templates
  - sesv2
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>custom_verification_email_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_verification_email_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.custom_verification_email_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_verification_email_template"
    values={[
        { label: 'get_custom_verification_email_template', value: 'get_custom_verification_email_template' },
        { label: 'list_custom_verification_email_templates', value: 'list_custom_verification_email_templates' }
    ]}
>
<TabItem value="get_custom_verification_email_template">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="failure_redirection_url" /></td>
    <td><code>string</code></td>
    <td>The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.</td>
</tr>
<tr>
    <td><CopyableCode code="from_email_address" /></td>
    <td><code>string</code></td>
    <td>The email address that the custom verification email is sent from.</td>
</tr>
<tr>
    <td><CopyableCode code="success_redirection_url" /></td>
    <td><code>string</code></td>
    <td>The URL that the recipient of the verification email is sent to if his or her address is successfully verified.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>An array of objects that define the tags (keys and values) that are associated with the custom verification email template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_content" /></td>
    <td><code>string</code></td>
    <td>The content of the custom verification email template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the template. You will refer to this name when you send email using the SendEmail or SendBulkEmail operations.</td>
</tr>
<tr>
    <td><CopyableCode code="template_subject" /></td>
    <td><code>string</code></td>
    <td>The subject line of the email.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_verification_email_templates">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="custom_verification_email_templates" /></td>
    <td><code>array</code></td>
    <td>A list of the custom verification email templates that exist in your account.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token indicating that there are additional custom verification email templates available to be listed. Pass this token to a subsequent call to ListCustomVerificationEmailTemplates to retrieve the next 50 custom verification email templates.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_custom_verification_email_template"><CopyableCode code="get_custom_verification_email_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_name"><code>template_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the custom email verification template for the template name you specify. For more information about custom verification email templates, see Using custom verification email templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#list_custom_verification_email_templates"><CopyableCode code="list_custom_verification_email_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>Lists the existing custom verification email templates for your account in the current Amazon Web Services Region. For more information about custom verification email templates, see Using custom verification email templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#create_custom_verification_email_template"><CopyableCode code="create_custom_verification_email_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-FromEmailAddress"><code>FromEmailAddress</code></a>, <a href="#parameter-TemplateSubject"><code>TemplateSubject</code></a>, <a href="#parameter-TemplateContent"><code>TemplateContent</code></a>, <a href="#parameter-SuccessRedirectionURL"><code>SuccessRedirectionURL</code></a>, <a href="#parameter-FailureRedirectionURL"><code>FailureRedirectionURL</code></a></td>
    <td></td>
    <td>Creates a new custom verification email template. For more information about custom verification email templates, see Using custom verification email templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#update_custom_verification_email_template"><CopyableCode code="update_custom_verification_email_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-template_name"><code>template_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FromEmailAddress"><code>FromEmailAddress</code></a>, <a href="#parameter-TemplateSubject"><code>TemplateSubject</code></a>, <a href="#parameter-TemplateContent"><code>TemplateContent</code></a>, <a href="#parameter-SuccessRedirectionURL"><code>SuccessRedirectionURL</code></a>, <a href="#parameter-FailureRedirectionURL"><code>FailureRedirectionURL</code></a></td>
    <td></td>
    <td>Updates an existing custom verification email template. For more information about custom verification email templates, see Using custom verification email templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#delete_custom_verification_email_template"><CopyableCode code="delete_custom_verification_email_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-template_name"><code>template_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing custom verification email template. For more information about custom verification email templates, see Using custom verification email templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-template_name">
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom verification email template that you want to delete.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token returned from a previous call to ListCustomVerificationEmailTemplates to indicate the position in the list of custom verification email templates.</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The number of results to show in a single call to ListCustomVerificationEmailTemplates. If the number of results is larger than the number you specified in this parameter, then the response includes a NextToken element, which you can use to obtain additional results. The value you specify has to be at least 1, and can be no more than 50.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_custom_verification_email_template"
    values={[
        { label: 'get_custom_verification_email_template', value: 'get_custom_verification_email_template' },
        { label: 'list_custom_verification_email_templates', value: 'list_custom_verification_email_templates' }
    ]}
>
<TabItem value="get_custom_verification_email_template">

Returns the custom email verification template for the template name you specify. For more information about custom verification email templates, see Using custom verification email templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
SELECT
failure_redirection_url,
from_email_address,
success_redirection_url,
tags,
template_content,
template_name,
template_subject
FROM aws.sesv2.custom_verification_email_templates
WHERE template_name = '{{ template_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_verification_email_templates">

Lists the existing custom verification email templates for your account in the current Amazon Web Services Region. For more information about custom verification email templates, see Using custom verification email templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
SELECT
custom_verification_email_templates,
next_token
FROM aws.sesv2.custom_verification_email_templates
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_verification_email_template"
    values={[
        { label: 'create_custom_verification_email_template', value: 'create_custom_verification_email_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_verification_email_template">

Creates a new custom verification email template. For more information about custom verification email templates, see Using custom verification email templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
INSERT INTO aws.sesv2.custom_verification_email_templates (
TemplateName,
FromEmailAddress,
TemplateSubject,
TemplateContent,
Tags,
SuccessRedirectionURL,
FailureRedirectionURL,
region
)
SELECT 
'{{ TemplateName }}' /* required */,
'{{ FromEmailAddress }}' /* required */,
'{{ TemplateSubject }}' /* required */,
'{{ TemplateContent }}' /* required */,
'{{ Tags }}',
'{{ SuccessRedirectionURL }}' /* required */,
'{{ FailureRedirectionURL }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_verification_email_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_verification_email_templates resource.
    - name: TemplateName
      value: "{{ TemplateName }}"
      description: |
        The name of the template. You will refer to this name when you send email using the SendEmail or SendBulkEmail operations.
    - name: FromEmailAddress
      value: "{{ FromEmailAddress }}"
    - name: TemplateSubject
      value: "{{ TemplateSubject }}"
      description: |
        The subject line of the email.
    - name: TemplateContent
      value: "{{ TemplateContent }}"
      description: |
        The content of the custom verification email template.
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: SuccessRedirectionURL
      value: "{{ SuccessRedirectionURL }}"
      description: |
        The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
    - name: FailureRedirectionURL
      value: "{{ FailureRedirectionURL }}"
      description: |
        The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_custom_verification_email_template"
    values={[
        { label: 'update_custom_verification_email_template', value: 'update_custom_verification_email_template' }
    ]}
>
<TabItem value="update_custom_verification_email_template">

Updates an existing custom verification email template. For more information about custom verification email templates, see Using custom verification email templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
UPDATE aws.sesv2.custom_verification_email_templates
SET 
FromEmailAddress = '{{ FromEmailAddress }}',
TemplateSubject = '{{ TemplateSubject }}',
TemplateContent = '{{ TemplateContent }}',
SuccessRedirectionURL = '{{ SuccessRedirectionURL }}',
FailureRedirectionURL = '{{ FailureRedirectionURL }}'
WHERE 
template_name = '{{ template_name }}' --required
AND region = '{{ region }}' --required
AND FromEmailAddress = '{{ FromEmailAddress }}' --required
AND TemplateSubject = '{{ TemplateSubject }}' --required
AND TemplateContent = '{{ TemplateContent }}' --required
AND SuccessRedirectionURL = '{{ SuccessRedirectionURL }}' --required
AND FailureRedirectionURL = '{{ FailureRedirectionURL }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_verification_email_template"
    values={[
        { label: 'delete_custom_verification_email_template', value: 'delete_custom_verification_email_template' }
    ]}
>
<TabItem value="delete_custom_verification_email_template">

Deletes an existing custom verification email template. For more information about custom verification email templates, see Using custom verification email templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
DELETE FROM aws.sesv2.custom_verification_email_templates
WHERE template_name = '{{ template_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
