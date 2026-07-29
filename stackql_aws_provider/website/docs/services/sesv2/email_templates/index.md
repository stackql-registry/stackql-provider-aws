--- 
title: email_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - email_templates
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

Creates, updates, deletes, gets or lists an <code>email_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="email_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.email_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_email_template"
    values={[
        { label: 'get_email_template', value: 'get_email_template' },
        { label: 'list_email_templates', value: 'list_email_templates' }
    ]}
>
<TabItem value="get_email_template">

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
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>An array of objects that define the tags (keys and values) that are associated with the email template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_content" /></td>
    <td><code>object</code></td>
    <td>The content of the email, composed of a subject line, an HTML part, and a text-only part.</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the template. You will refer to this name when you send email using the SendEmail or SendBulkEmail operations.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_email_templates">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token indicating that there are additional email templates available to be listed. Pass this token to a subsequent ListEmailTemplates call to retrieve the next 10 email templates.</td>
</tr>
<tr>
    <td><CopyableCode code="templates_metadata" /></td>
    <td><code>array</code></td>
    <td>An array the contains the name and creation time stamp for each template in your Amazon SES account.</td>
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
    <td><a href="#get_email_template"><CopyableCode code="get_email_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_name"><code>template_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays the template object (which includes the subject line, HTML part and text part) for the template you specify. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#list_email_templates"><CopyableCode code="list_email_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>Lists the email templates present in your Amazon SES account in the current Amazon Web Services Region. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#create_email_template"><CopyableCode code="create_email_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-TemplateContent"><code>TemplateContent</code></a></td>
    <td></td>
    <td>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#update_email_template"><CopyableCode code="update_email_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-template_name"><code>template_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TemplateContent"><code>TemplateContent</code></a></td>
    <td></td>
    <td>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#delete_email_template"><CopyableCode code="delete_email_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-template_name"><code>template_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an email template. You can execute this operation no more than once per second.</td>
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
    <td>The name of the template to be deleted.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token returned from a previous call to ListEmailTemplates to indicate the position in the list of email templates.</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The number of results to show in a single call to ListEmailTemplates. If the number of results is larger than the number you specified in this parameter, then the response includes a NextToken element, which you can use to obtain additional results. The value you specify has to be at least 1, and can be no more than 100.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_email_template"
    values={[
        { label: 'get_email_template', value: 'get_email_template' },
        { label: 'list_email_templates', value: 'list_email_templates' }
    ]}
>
<TabItem value="get_email_template">

Displays the template object (which includes the subject line, HTML part and text part) for the template you specify. You can execute this operation no more than once per second.

```sql
SELECT
tags,
template_content,
template_name
FROM aws.sesv2.email_templates
WHERE template_name = '{{ template_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_email_templates">

Lists the email templates present in your Amazon SES account in the current Amazon Web Services Region. You can execute this operation no more than once per second.

```sql
SELECT
next_token,
templates_metadata
FROM aws.sesv2.email_templates
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_email_template"
    values={[
        { label: 'create_email_template', value: 'create_email_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_email_template">

Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
INSERT INTO aws.sesv2.email_templates (
TemplateName,
TemplateContent,
Tags,
region
)
SELECT 
'{{ TemplateName }}' /* required */,
'{{ TemplateContent }}' /* required */,
'{{ Tags }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: email_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the email_templates resource.
    - name: TemplateName
      value: "{{ TemplateName }}"
      description: |
        The name of the template. You will refer to this name when you send email using the SendEmail or SendBulkEmail operations.
    - name: TemplateContent
      description: |
        The content of the email, composed of a subject line, an HTML part, and a text-only part.
      value:
        Subject: "{{ Subject }}"
        Text: "{{ Text }}"
        Html: "{{ Html }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_email_template"
    values={[
        { label: 'update_email_template', value: 'update_email_template' }
    ]}
>
<TabItem value="update_email_template">

Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
UPDATE aws.sesv2.email_templates
SET 
TemplateContent = '{{ TemplateContent }}'
WHERE 
template_name = '{{ template_name }}' --required
AND region = '{{ region }}' --required
AND TemplateContent = '{{ TemplateContent }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_email_template"
    values={[
        { label: 'delete_email_template', value: 'delete_email_template' }
    ]}
>
<TabItem value="delete_email_template">

Deletes an email template. You can execute this operation no more than once per second.

```sql
DELETE FROM aws.sesv2.email_templates
WHERE template_name = '{{ template_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
