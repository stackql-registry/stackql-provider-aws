--- 
title: registration_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - registration_associations
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

Creates, updates, deletes, gets or lists a <code>registration_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registration_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.registration_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_registration_associations"
    values={[
        { label: 'list_registration_associations', value: 'list_registration_associations' }
    ]}
>
<TabItem value="list_registration_associations">

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
    <td><CopyableCode code="iso_country_code" /></td>
    <td><code>string</code></td>
    <td>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. (pattern: &lt;code&gt;&#91;A-Z&#93;&#123;2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number" /></td>
    <td><code>string</code></td>
    <td>The phone number associated with the registration in E.164 format. (pattern: &lt;code&gt;\+?&#91;1-9&#93;&#91;0-9&#93;&#123;1,18&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the origination identity that is associated with the registration.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the origination identity. For example this could be a PhoneNumberId or SenderId.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The origination identity type.</td>
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
    <td><a href="#list_registration_associations"><CopyableCode code="list_registration_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve all of the origination identities that are associated with a registration.</td>
</tr>
<tr>
    <td><a href="#create_registration_association"><CopyableCode code="create_registration_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegistrationId"><code>RegistrationId</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a></td>
    <td></td>
    <td>Associate the registration with an origination identity such as a phone number or sender ID.</td>
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
    defaultValue="list_registration_associations"
    values={[
        { label: 'list_registration_associations', value: 'list_registration_associations' }
    ]}
>
<TabItem value="list_registration_associations">

Retrieve all of the origination identities that are associated with a registration.

```sql
SELECT
iso_country_code,
phone_number,
resource_arn,
resource_id,
resource_type
FROM aws.pinpoint_sms_voice_v2.registration_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_registration_association"
    values={[
        { label: 'create_registration_association', value: 'create_registration_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_registration_association">

Associate the registration with an origination identity such as a phone number or sender ID.

```sql
INSERT INTO aws.pinpoint_sms_voice_v2.registration_associations (
RegistrationId,
ResourceId,
region
)
SELECT 
'{{ RegistrationId }}' /* required */,
'{{ ResourceId }}' /* required */,
'{{ region }}'
RETURNING
iso_country_code,
phone_number,
registration_arn,
registration_id,
registration_type,
resource_arn,
resource_id,
resource_type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: registration_associations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the registration_associations resource.
    - name: RegistrationId
      value: "{{ RegistrationId }}"
      description: |
        The unique identifier for the registration.
    - name: ResourceId
      value: "{{ ResourceId }}"
      description: |
        The unique identifier for the origination identity. For example this could be a PhoneNumberId or SenderId.
`}</CodeBlock>

</TabItem>
</Tabs>
