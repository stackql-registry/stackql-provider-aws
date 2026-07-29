--- 
title: service_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - service_attributes
  - servicediscovery
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

Creates, updates, deletes, gets or lists a <code>service_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicediscovery.service_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_attributes"
    values={[
        { label: 'get_service_attributes', value: 'get_service_attributes' }
    ]}
>
<TabItem value="get_service_attributes">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A string map that contains the following information for the service that you specify in ServiceArn: The attributes that apply to the service. For each attribute, the applicable value. You can specify a total of 30 attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that created the namespace with which the service is associated. If this isn't your account ID, it is the ID of the account that shared the namespace with your account. For more information about shared namespaces, see Cross-account Cloud Map namespace sharing in the Cloud Map Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the service that the attributes are associated with.</td>
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
    <td><a href="#get_service_attributes"><CopyableCode code="get_service_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the attributes associated with a specified service.</td>
</tr>
<tr>
    <td><a href="#update_service_attributes"><CopyableCode code="update_service_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceId"><code>ServiceId</code></a>, <a href="#parameter-Attributes"><code>Attributes</code></a></td>
    <td></td>
    <td>Submits a request to update a specified service to add service-level attributes.</td>
</tr>
<tr>
    <td><a href="#delete_service_attributes"><CopyableCode code="delete_service_attributes" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes specific attributes associated with a service.</td>
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
    defaultValue="get_service_attributes"
    values={[
        { label: 'get_service_attributes', value: 'get_service_attributes' }
    ]}
>
<TabItem value="get_service_attributes">

Returns the attributes associated with a specified service.

```sql
SELECT
attributes,
resource_owner,
service_arn
FROM aws.servicediscovery.service_attributes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_attributes"
    values={[
        { label: 'update_service_attributes', value: 'update_service_attributes' }
    ]}
>
<TabItem value="update_service_attributes">

Submits a request to update a specified service to add service-level attributes.

```sql
UPDATE aws.servicediscovery.service_attributes
SET 
ServiceId = '{{ ServiceId }}',
Attributes = '{{ Attributes }}'
WHERE 
region = '{{ region }}' --required
AND ServiceId = '{{ ServiceId }}' --required
AND Attributes = '{{ Attributes }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_attributes"
    values={[
        { label: 'delete_service_attributes', value: 'delete_service_attributes' }
    ]}
>
<TabItem value="delete_service_attributes">

Deletes specific attributes associated with a service.

```sql
DELETE FROM aws.servicediscovery.service_attributes
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
