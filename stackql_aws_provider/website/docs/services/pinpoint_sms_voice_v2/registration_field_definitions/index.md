--- 
title: registration_field_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - registration_field_definitions
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

Creates, updates, deletes, gets or lists a <code>registration_field_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registration_field_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.registration_field_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_registration_field_definitions"
    values={[
        { label: 'describe_registration_field_definitions', value: 'describe_registration_field_definitions' }
    ]}
>
<TabItem value="describe_registration_field_definitions">

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
    <td><CopyableCode code="DisplayHints" /></td>
    <td><code>object</code></td>
    <td>An array of RegistrationFieldDisplayHints objects for the field.</td>
</tr>
<tr>
    <td><CopyableCode code="FieldPath" /></td>
    <td><code>string</code></td>
    <td>The path to the registration form field. You can use DescribeRegistrationFieldDefinitions for a list of FieldPaths. (pattern: &lt;code&gt;&#91;A-Za-z0-9_\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FieldRequirement" /></td>
    <td><code>string</code></td>
    <td>Specifies if the field for the registration form is required, conditional or optional. (REQUIRED, CONDITIONAL, OPTIONAL)</td>
</tr>
<tr>
    <td><CopyableCode code="FieldType" /></td>
    <td><code>string</code></td>
    <td>The type of field. (SELECT, TEXT, ATTACHMENT)</td>
</tr>
<tr>
    <td><CopyableCode code="SectionPath" /></td>
    <td><code>string</code></td>
    <td>The section path of the field. (pattern: &lt;code&gt;&#91;A-Za-z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SelectValidation" /></td>
    <td><code>object</code></td>
    <td>The validation rules for a select field.</td>
</tr>
<tr>
    <td><CopyableCode code="TextValidation" /></td>
    <td><code>object</code></td>
    <td>The validation rules for a text field.</td>
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
    <td><a href="#describe_registration_field_definitions"><CopyableCode code="describe_registration_field_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified registration type field definitions. You can use DescribeRegistrationFieldDefinitions to view the requirements for creating, filling out, and submitting each registration type.</td>
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
    defaultValue="describe_registration_field_definitions"
    values={[
        { label: 'describe_registration_field_definitions', value: 'describe_registration_field_definitions' }
    ]}
>
<TabItem value="describe_registration_field_definitions">

Retrieves the specified registration type field definitions. You can use DescribeRegistrationFieldDefinitions to view the requirements for creating, filling out, and submitting each registration type.

```sql
SELECT
DisplayHints,
FieldPath,
FieldRequirement,
FieldType,
SectionPath,
SelectValidation,
TextValidation
FROM aws.pinpoint_sms_voice_v2.registration_field_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
