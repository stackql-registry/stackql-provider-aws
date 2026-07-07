--- 
title: custom_verification_email_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_verification_email_templates
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

Creates, updates, deletes, gets or lists a <code>custom_verification_email_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_verification_email_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.custom_verification_email_templates" /></td></tr>
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
    <td><CopyableCode code="FailureRedirectionURL" /></td>
    <td><code>string</code></td>
    <td>The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.</td>
</tr>
<tr>
    <td><CopyableCode code="FromEmailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address that the custom verification email is sent from.</td>
</tr>
<tr>
    <td><CopyableCode code="SuccessRedirectionURL" /></td>
    <td><code>string</code></td>
    <td>The URL that the recipient of the verification email is sent to if his or her address is successfully verified.</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateContent" /></td>
    <td><code>string</code></td>
    <td>The content of the custom verification email.</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateName" /></td>
    <td><code>string</code></td>
    <td>The name of the custom verification email template.</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateSubject" /></td>
    <td><code>string</code></td>
    <td>The subject line of the custom verification email.</td>
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
    <td><CopyableCode code="FailureRedirectionURL" /></td>
    <td><code>string</code></td>
    <td>The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.</td>
</tr>
<tr>
    <td><CopyableCode code="FromEmailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address that the custom verification email is sent from.</td>
</tr>
<tr>
    <td><CopyableCode code="SuccessRedirectionURL" /></td>
    <td><code>string</code></td>
    <td>The URL that the recipient of the verification email is sent to if his or her address is successfully verified.</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateName" /></td>
    <td><code>string</code></td>
    <td>The name of the custom verification email template.</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateSubject" /></td>
    <td><code>string</code></td>
    <td>The subject line of the custom verification email.</td>
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
    <td><a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the custom email verification template for the template name you specify. For more information about custom verification email templates, see Using Custom Verification Email Templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#list_custom_verification_email_templates"><CopyableCode code="list_custom_verification_email_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Lists the existing custom verification email templates for your account in the current Amazon Web Services Region. For more information about custom verification email templates, see Using Custom Verification Email Templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#create_custom_verification_email_template"><CopyableCode code="create_custom_verification_email_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-FromEmailAddress"><code>FromEmailAddress</code></a>, <a href="#parameter-TemplateSubject"><code>TemplateSubject</code></a>, <a href="#parameter-TemplateContent"><code>TemplateContent</code></a>, <a href="#parameter-SuccessRedirectionURL"><code>SuccessRedirectionURL</code></a>, <a href="#parameter-FailureRedirectionURL"><code>FailureRedirectionURL</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new custom verification email template. For more information about custom verification email templates, see Using Custom Verification Email Templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#update_custom_verification_email_template"><CopyableCode code="update_custom_verification_email_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-FromEmailAddress"><code>FromEmailAddress</code></a>, <a href="#parameter-TemplateSubject"><code>TemplateSubject</code></a>, <a href="#parameter-TemplateContent"><code>TemplateContent</code></a>, <a href="#parameter-SuccessRedirectionURL"><code>SuccessRedirectionURL</code></a>, <a href="#parameter-FailureRedirectionURL"><code>FailureRedirectionURL</code></a></td>
    <td>Updates an existing custom verification email template. For more information about custom verification email templates, see Using Custom Verification Email Templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#delete_custom_verification_email_template"><CopyableCode code="delete_custom_verification_email_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing custom verification email template. For more information about custom verification email templates, see Using Custom Verification Email Templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-FailureRedirectionURL">
    <td><CopyableCode code="FailureRedirectionURL" /></td>
    <td><code>string</code></td>
    <td>The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.</td>
</tr>
<tr id="parameter-FromEmailAddress">
    <td><CopyableCode code="FromEmailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address that the custom verification email is sent from.</td>
</tr>
<tr id="parameter-SuccessRedirectionURL">
    <td><CopyableCode code="SuccessRedirectionURL" /></td>
    <td><code>string</code></td>
    <td>The URL that the recipient of the verification email is sent to if his or her address is successfully verified.</td>
</tr>
<tr id="parameter-TemplateContent">
    <td><CopyableCode code="TemplateContent" /></td>
    <td><code>string</code></td>
    <td>The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see Custom Verification Email Frequently Asked Questions in the Amazon SES Developer Guide.</td>
</tr>
<tr id="parameter-TemplateName">
    <td><CopyableCode code="TemplateName" /></td>
    <td><code>string</code></td>
    <td>The name of the custom verification email template to delete.</td>
</tr>
<tr id="parameter-TemplateSubject">
    <td><CopyableCode code="TemplateSubject" /></td>
    <td><code>string</code></td>
    <td>The subject line of the custom verification email.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-FailureRedirectionURL">
    <td><CopyableCode code="FailureRedirectionURL" /></td>
    <td><code>string</code></td>
    <td>The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.</td>
</tr>
<tr id="parameter-FromEmailAddress">
    <td><CopyableCode code="FromEmailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address that the custom verification email is sent from.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of custom verification email templates to return. This value must be at least 1 and less than or equal to 50. If you do not specify a value, or if you specify a value less than 1 or greater than 50, the operation returns up to 50 results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>An array the contains the name and creation time stamp for each template in your Amazon SES account.</td>
</tr>
<tr id="parameter-SuccessRedirectionURL">
    <td><CopyableCode code="SuccessRedirectionURL" /></td>
    <td><code>string</code></td>
    <td>The URL that the recipient of the verification email is sent to if his or her address is successfully verified.</td>
</tr>
<tr id="parameter-TemplateContent">
    <td><CopyableCode code="TemplateContent" /></td>
    <td><code>string</code></td>
    <td>The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see Custom Verification Email Frequently Asked Questions in the Amazon SES Developer Guide.</td>
</tr>
<tr id="parameter-TemplateSubject">
    <td><CopyableCode code="TemplateSubject" /></td>
    <td><code>string</code></td>
    <td>The subject line of the custom verification email.</td>
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

Returns the custom email verification template for the template name you specify. For more information about custom verification email templates, see Using Custom Verification Email Templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
SELECT
FailureRedirectionURL,
FromEmailAddress,
SuccessRedirectionURL,
TemplateContent,
TemplateName,
TemplateSubject
FROM aws.ses.custom_verification_email_templates
WHERE TemplateName = '{{ TemplateName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_verification_email_templates">

Lists the existing custom verification email templates for your account in the current Amazon Web Services Region. For more information about custom verification email templates, see Using Custom Verification Email Templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
SELECT
FailureRedirectionURL,
FromEmailAddress,
SuccessRedirectionURL,
TemplateName,
TemplateSubject
FROM aws.ses.custom_verification_email_templates
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
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

Creates a new custom verification email template. For more information about custom verification email templates, see Using Custom Verification Email Templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
INSERT INTO aws.ses.custom_verification_email_templates (
TemplateName,
FromEmailAddress,
TemplateSubject,
TemplateContent,
SuccessRedirectionURL,
FailureRedirectionURL,
region
)
SELECT 
'{{ TemplateName }}',
'{{ FromEmailAddress }}',
'{{ TemplateSubject }}',
'{{ TemplateContent }}',
'{{ SuccessRedirectionURL }}',
'{{ FailureRedirectionURL }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_verification_email_templates
  props:
    - name: TemplateName
      value: "{{ TemplateName }}"
      description: Required parameter for the custom_verification_email_templates resource.
    - name: FromEmailAddress
      value: "{{ FromEmailAddress }}"
      description: Required parameter for the custom_verification_email_templates resource.
    - name: TemplateSubject
      value: "{{ TemplateSubject }}"
      description: Required parameter for the custom_verification_email_templates resource.
    - name: TemplateContent
      value: "{{ TemplateContent }}"
      description: Required parameter for the custom_verification_email_templates resource.
    - name: SuccessRedirectionURL
      value: "{{ SuccessRedirectionURL }}"
      description: Required parameter for the custom_verification_email_templates resource.
    - name: FailureRedirectionURL
      value: "{{ FailureRedirectionURL }}"
      description: Required parameter for the custom_verification_email_templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_verification_email_templates resource.
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

Updates an existing custom verification email template. For more information about custom verification email templates, see Using Custom Verification Email Templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
UPDATE aws.ses.custom_verification_email_templates
SET 
-- No updatable properties
WHERE 
TemplateName = '{{ TemplateName }}' --required
AND region = '{{ region }}' --required
AND FromEmailAddress = '{{ FromEmailAddress}}'
AND TemplateSubject = '{{ TemplateSubject}}'
AND TemplateContent = '{{ TemplateContent}}'
AND SuccessRedirectionURL = '{{ SuccessRedirectionURL}}'
AND FailureRedirectionURL = '{{ FailureRedirectionURL}}';
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

Deletes an existing custom verification email template. For more information about custom verification email templates, see Using Custom Verification Email Templates in the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
DELETE FROM aws.ses.custom_verification_email_templates
WHERE TemplateName = '{{ TemplateName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
