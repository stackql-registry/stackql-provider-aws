--- 
title: service_instance_provisioned_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - service_instance_provisioned_resources
  - proton
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

Creates, updates, deletes, gets or lists a <code>service_instance_provisioned_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_instance_provisioned_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.service_instance_provisioned_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_service_instance_provisioned_resources"
    values={[
        { label: 'list_service_instance_provisioned_resources', value: 'list_service_instance_provisioned_resources' }
    ]}
>
<TabItem value="list_service_instance_provisioned_resources">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The provisioned resource name.</td>
</tr>
<tr>
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The provisioned resource identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioningEngine" /></td>
    <td><code>string</code></td>
    <td>The resource provisioning engine. At this time, CLOUDFORMATION can be used for Amazon Web Services-managed provisioning, and TERRAFORM can be used for self-managed provisioning. For more information, see Self-managed provisioning in the Proton User Guide. (CLOUDFORMATION, TERRAFORM)</td>
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
    <td><a href="#list_service_instance_provisioned_resources"><CopyableCode code="list_service_instance_provisioned_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List provisioned resources for a service instance with details.</td>
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
    defaultValue="list_service_instance_provisioned_resources"
    values={[
        { label: 'list_service_instance_provisioned_resources', value: 'list_service_instance_provisioned_resources' }
    ]}
>
<TabItem value="list_service_instance_provisioned_resources">

List provisioned resources for a service instance with details.

```sql
SELECT
name,
identifier,
provisioningEngine
FROM aws.proton.service_instance_provisioned_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
