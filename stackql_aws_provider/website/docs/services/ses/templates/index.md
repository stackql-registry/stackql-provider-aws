--- 
title: templates
hide_title: false
hide_table_of_contents: false
keywords:
  - templates
  - ses
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

Creates, updates, deletes, gets or lists a <code>templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_template"
    values={[
        { label: 'get_template', value: 'get_template' },
        { label: 'list_templates', value: 'list_templates' }
    ]}
>
<TabItem value="get_template">

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
    <td><CopyableCode code="HtmlPart" /></td>
    <td><code>string</code></td>
    <td>The HTML body of the email.</td>
</tr>
<tr>
    <td><CopyableCode code="SubjectPart" /></td>
    <td><code>string</code></td>
    <td>The subject line of the email.</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateName" /></td>
    <td><code>string</code></td>
    <td>The name of the template. You use this name when you send email using the SendTemplatedEmail or SendBulkTemplatedEmail operations.</td>
</tr>
<tr>
    <td><CopyableCode code="TextPart" /></td>
    <td><code>string</code></td>
    <td>The email body that is visible to recipients whose email clients do not display HTML content.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_templates">

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
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string</code></td>
    <td>The time and date the template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the template.</td>
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
    <td><a href="#get_template"><CopyableCode code="get_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#list_templates"><CopyableCode code="list_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists the email templates present in your Amazon SES account in the current Amazon Web Services Region. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#create_template"><CopyableCode code="create_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-Template"><code>Template</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single operation. For more information, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#update_template"><CopyableCode code="update_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-Template"><code>Template</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single operation. For more information, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#delete_template"><CopyableCode code="delete_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an email template. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#send_custom_verification_email"><CopyableCode code="send_custom_verification_email" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-EmailAddress"><code>EmailAddress</code></a>, <a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a></td>
    <td>Adds an email address to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address. To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see Using Custom Verification Email Templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#test_render_template"><CopyableCode code="test_render_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-TemplateData"><code>TemplateData</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-EmailAddress">
    <td><CopyableCode code="EmailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address to verify.</td>
</tr>
<tr id="parameter-Template">
    <td><CopyableCode code="Template" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr id="parameter-TemplateData">
    <td><CopyableCode code="TemplateData" /></td>
    <td><code>string</code></td>
    <td>A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.</td>
</tr>
<tr id="parameter-TemplateName">
    <td><CopyableCode code="TemplateName" /></td>
    <td><code>string</code></td>
    <td>The name of the template to render.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ConfigurationSetName">
    <td><CopyableCode code="ConfigurationSetName" /></td>
    <td><code>string</code></td>
    <td>Name of a configuration set to use when sending the verification email.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of templates to return. This value must be at least 1 and less than or equal to 100. If more than 100 items are requested, the page size will automatically set to 100. If you do not specify a value, 10 is the default page size.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token returned from a previous call to ListTemplates to indicate the position in the list of email templates.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_template"
    values={[
        { label: 'get_template', value: 'get_template' },
        { label: 'list_templates', value: 'list_templates' }
    ]}
>
<TabItem value="get_template">

Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify. You can execute this operation no more than once per second.

```sql
SELECT
HtmlPart,
SubjectPart,
TemplateName,
TextPart
FROM aws.ses.templates
WHERE TemplateName = '{{ TemplateName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_templates">

Lists the email templates present in your Amazon SES account in the current Amazon Web Services Region. You can execute this operation no more than once per second.

```sql
SELECT
CreatedTimestamp,
Name
FROM aws.ses.templates
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_template"
    values={[
        { label: 'create_template', value: 'create_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_template">

Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single operation. For more information, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
INSERT INTO aws.ses.templates (
Template,
region
)
SELECT 
'{{ Template }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: templates
  props:
    - name: Template
      value: "{{ Template }}"
      description: Required parameter for the templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the templates resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_template"
    values={[
        { label: 'update_template', value: 'update_template' }
    ]}
>
<TabItem value="update_template">

Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single operation. For more information, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
UPDATE aws.ses.templates
SET 
-- No updatable properties
WHERE 
Template = '{{ Template }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_template"
    values={[
        { label: 'delete_template', value: 'delete_template' }
    ]}
>
<TabItem value="delete_template">

Deletes an email template. You can execute this operation no more than once per second.

```sql
DELETE FROM aws.ses.templates
WHERE TemplateName = '{{ TemplateName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="send_custom_verification_email"
    values={[
        { label: 'send_custom_verification_email', value: 'send_custom_verification_email' },
        { label: 'test_render_template', value: 'test_render_template' }
    ]}
>
<TabItem value="send_custom_verification_email">

Adds an email address to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address. To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see Using Custom Verification Email Templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
EXEC aws.ses.templates.send_custom_verification_email 
@EmailAddress='{{ EmailAddress }}' --required, 
@TemplateName='{{ TemplateName }}' --required, 
@region='{{ region }}' --required, 
@ConfigurationSetName='{{ ConfigurationSetName }}'
;
```
</TabItem>
<TabItem value="test_render_template">

Creates a preview of the MIME content of an email when provided with a template and a set of replacement data. You can execute this operation no more than once per second.

```sql
EXEC aws.ses.templates.test_render_template 
@TemplateName='{{ TemplateName }}' --required, 
@TemplateData='{{ TemplateData }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
