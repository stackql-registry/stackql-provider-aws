--- 
title: resource_deployment_status_changes
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_deployment_status_changes
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

Creates, updates, deletes, gets or lists a <code>resource_deployment_status_changes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_deployment_status_changes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.resource_deployment_status_changes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#notify_resource_deployment_status_change"><CopyableCode code="notify_resource_deployment_status_change" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a></td>
    <td></td>
    <td>Notify Proton of status changes to a provisioned resource when you use self-managed provisioning. For more information, see Self-managed provisioning in the Proton User Guide.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="notify_resource_deployment_status_change"
    values={[
        { label: 'notify_resource_deployment_status_change', value: 'notify_resource_deployment_status_change' }
    ]}
>
<TabItem value="notify_resource_deployment_status_change">

Notify Proton of status changes to a provisioned resource when you use self-managed provisioning. For more information, see Self-managed provisioning in the Proton User Guide.

```sql
EXEC aws.proton.resource_deployment_status_changes.notify_resource_deployment_status_change 
@region='{{ region }}' --required 
@@json=
'{
"deploymentId": "{{ deploymentId }}", 
"outputs": "{{ outputs }}", 
"resourceArn": "{{ resourceArn }}", 
"status": "{{ status }}", 
"statusMessage": "{{ statusMessage }}"
}'
;
```
</TabItem>
</Tabs>
