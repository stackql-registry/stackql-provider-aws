--- 
title: contact_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_attributes
  - connect
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

Creates, updates, deletes, gets or lists a <code>contact_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.contact_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_contact_attributes"
    values={[
        { label: 'get_contact_attributes', value: 'get_contact_attributes' }
    ]}
>
<TabItem value="get_contact_attributes">

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
    <td><CopyableCode code="Attributes" /></td>
    <td><code>object</code></td>
    <td>Information about the attributes.</td>
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
    <td><a href="#get_contact_attributes"><CopyableCode code="get_contact_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-initial_contact_id"><code>initial_contact_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the contact attributes for the specified contact.</td>
</tr>
<tr>
    <td><a href="#update_contact_attributes"><CopyableCode code="update_contact_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InitialContactId"><code>InitialContactId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a></td>
    <td></td>
    <td>Creates or updates user-defined contact attributes associated with the specified contact. You can create or update user-defined attributes for both ongoing and completed contacts. For example, while the call is active, you can update the customer's name or the reason the customer called. You can add notes about steps that the agent took during the call that display to the next agent that takes the call. You can also update attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, such as legal review or to identify abusive callers. Contact attributes are available in Amazon Connect for 24 months, and are then deleted. For information about contact record retention and the maximum size of the contact record attributes section, see Feature specifications in the Amazon Connect Administrator Guide.</td>
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
<tr id="parameter-initial_contact_id">
    <td><CopyableCode code="initial_contact_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the initial contact.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_contact_attributes"
    values={[
        { label: 'get_contact_attributes', value: 'get_contact_attributes' }
    ]}
>
<TabItem value="get_contact_attributes">

Retrieves the contact attributes for the specified contact.

```sql
SELECT
Attributes
FROM aws.connect.contact_attributes
WHERE instance_id = '{{ instance_id }}' -- required
AND initial_contact_id = '{{ initial_contact_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_contact_attributes"
    values={[
        { label: 'update_contact_attributes', value: 'update_contact_attributes' }
    ]}
>
<TabItem value="update_contact_attributes">

Creates or updates user-defined contact attributes associated with the specified contact. You can create or update user-defined attributes for both ongoing and completed contacts. For example, while the call is active, you can update the customer's name or the reason the customer called. You can add notes about steps that the agent took during the call that display to the next agent that takes the call. You can also update attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, such as legal review or to identify abusive callers. Contact attributes are available in Amazon Connect for 24 months, and are then deleted. For information about contact record retention and the maximum size of the contact record attributes section, see Feature specifications in the Amazon Connect Administrator Guide.

```sql
UPDATE aws.connect.contact_attributes
SET 
InitialContactId = '{{ InitialContactId }}',
InstanceId = '{{ InstanceId }}',
Attributes = '{{ Attributes }}'
WHERE 
region = '{{ region }}' --required
AND InitialContactId = '{{ InitialContactId }}' --required
AND InstanceId = '{{ InstanceId }}' --required;
```
</TabItem>
</Tabs>
