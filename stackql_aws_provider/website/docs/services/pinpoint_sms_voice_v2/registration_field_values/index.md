--- 
title: registration_field_values
hide_title: false
hide_table_of_contents: false
keywords:
  - registration_field_values
  - pinpoint_sms_voice_v2
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

Creates, updates, deletes, gets or lists a <code>registration_field_values</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registration_field_values" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.registration_field_values" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_registration_field_values"
    values={[
        { label: 'describe_registration_field_values', value: 'describe_registration_field_values' }
    ]}
>
<TabItem value="describe_registration_field_values">

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
    <td><CopyableCode code="denied_reason" /></td>
    <td><code>string</code></td>
    <td>A description of why the registration was denied.</td>
</tr>
<tr>
    <td><CopyableCode code="feedback" /></td>
    <td><code>string</code></td>
    <td>Generative AI feedback information provided for this specific field during the registration review process. This may include validation errors, suggestions for improvement, or additional requirements.</td>
</tr>
<tr>
    <td><CopyableCode code="field_path" /></td>
    <td><code>string</code></td>
    <td>The path to the registration form field. You can use DescribeRegistrationFieldDefinitions for a list of FieldPaths. (pattern: &lt;code&gt;&#91;A-Za-z0-9_\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registration_attachment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the registration attachment. (pattern: &lt;code&gt;&#91;A-Za-z0-9_:/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="select_choices" /></td>
    <td><code>array</code></td>
    <td>An array of values for the form field.</td>
</tr>
<tr>
    <td><CopyableCode code="text_value" /></td>
    <td><code>string</code></td>
    <td>The text data for a free form field.</td>
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
    <td><a href="#describe_registration_field_values"><CopyableCode code="describe_registration_field_values" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified registration field values.</td>
</tr>
<tr>
    <td><a href="#put_registration_field_value"><CopyableCode code="put_registration_field_value" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegistrationId"><code>RegistrationId</code></a>, <a href="#parameter-FieldPath"><code>FieldPath</code></a></td>
    <td></td>
    <td>Creates or updates a field value for a registration.</td>
</tr>
<tr>
    <td><a href="#delete_registration_field_value"><CopyableCode code="delete_registration_field_value" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the value in a registration form field.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_registration_field_values"
    values={[
        { label: 'describe_registration_field_values', value: 'describe_registration_field_values' }
    ]}
>
<TabItem value="describe_registration_field_values">

Retrieves the specified registration field values.

```sql
SELECT
denied_reason,
feedback,
field_path,
registration_attachment_id,
select_choices,
text_value
FROM aws.pinpoint_sms_voice_v2.registration_field_values
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_registration_field_value"
    values={[
        { label: 'put_registration_field_value', value: 'put_registration_field_value' }
    ]}
>
<TabItem value="put_registration_field_value">

Creates or updates a field value for a registration.

```sql
REPLACE aws.pinpoint_sms_voice_v2.registration_field_values
SET 
RegistrationId = '{{ RegistrationId }}',
FieldPath = '{{ FieldPath }}',
SelectChoices = '{{ SelectChoices }}',
TextValue = '{{ TextValue }}',
RegistrationAttachmentId = '{{ RegistrationAttachmentId }}'
WHERE 
region = '{{ region }}' --required
AND RegistrationId = '{{ RegistrationId }}' --required
AND FieldPath = '{{ FieldPath }}' --required
RETURNING
field_path,
registration_arn,
registration_attachment_id,
registration_id,
select_choices,
text_value,
version_number;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_registration_field_value"
    values={[
        { label: 'delete_registration_field_value', value: 'delete_registration_field_value' }
    ]}
>
<TabItem value="delete_registration_field_value">

Delete the value in a registration form field.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.registration_field_values
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
