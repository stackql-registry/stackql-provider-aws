--- 
title: hypervisor_property_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - hypervisor_property_mappings
  - backup_gateway
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

Creates, updates, deletes, gets or lists a <code>hypervisor_property_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hypervisor_property_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup_gateway.hypervisor_property_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_hypervisor_property_mappings"
    values={[
        { label: 'get_hypervisor_property_mappings', value: 'get_hypervisor_property_mappings' }
    ]}
>
<TabItem value="get_hypervisor_property_mappings">

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
    <td><CopyableCode code="hypervisor_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the hypervisor. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):backup-gateway(:&#91;a-zA-Z-0-9&#93;+)&#123;3&#125;\/&#91;a-zA-Z-0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):iam::(&#91;0-9&#93;+):role/(\S+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vmware_to_aws_tag_mappings" /></td>
    <td><code>array</code></td>
    <td>This is a display of the mappings of VMware tags to the Amazon Web Services tags.</td>
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
    <td><a href="#get_hypervisor_property_mappings"><CopyableCode code="get_hypervisor_property_mappings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action retrieves the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the hypervisor to the properties available in Amazon Web Services.</td>
</tr>
<tr>
    <td><a href="#put_hypervisor_property_mappings"><CopyableCode code="put_hypervisor_property_mappings" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HypervisorArn"><code>HypervisorArn</code></a>, <a href="#parameter-VmwareToAwsTagMappings"><code>VmwareToAwsTagMappings</code></a>, <a href="#parameter-IamRoleArn"><code>IamRoleArn</code></a></td>
    <td></td>
    <td>This action sets the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the hypervisor to the properties available in Amazon Web Services.</td>
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
    defaultValue="get_hypervisor_property_mappings"
    values={[
        { label: 'get_hypervisor_property_mappings', value: 'get_hypervisor_property_mappings' }
    ]}
>
<TabItem value="get_hypervisor_property_mappings">

This action retrieves the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the hypervisor to the properties available in Amazon Web Services.

```sql
SELECT
hypervisor_arn,
iam_role_arn,
vmware_to_aws_tag_mappings
FROM aws.backup_gateway.hypervisor_property_mappings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_hypervisor_property_mappings"
    values={[
        { label: 'put_hypervisor_property_mappings', value: 'put_hypervisor_property_mappings' }
    ]}
>
<TabItem value="put_hypervisor_property_mappings">

This action sets the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the hypervisor to the properties available in Amazon Web Services.

```sql
REPLACE aws.backup_gateway.hypervisor_property_mappings
SET 
HypervisorArn = '{{ HypervisorArn }}',
VmwareToAwsTagMappings = '{{ VmwareToAwsTagMappings }}',
IamRoleArn = '{{ IamRoleArn }}'
WHERE 
region = '{{ region }}' --required
AND HypervisorArn = '{{ HypervisorArn }}' --required
AND VmwareToAwsTagMappings = '{{ VmwareToAwsTagMappings }}' --required
AND IamRoleArn = '{{ IamRoleArn }}' --required
RETURNING
hypervisor_arn;
```
</TabItem>
</Tabs>
