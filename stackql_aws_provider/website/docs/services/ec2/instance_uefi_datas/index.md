--- 
title: instance_uefi_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_uefi_datas
  - ec2
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

Creates, updates, deletes, gets or lists an <code>instance_uefi_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_uefi_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instance_uefi_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instance_uefi_data"
    values={[
        { label: 'get_instance_uefi_data', value: 'get_instance_uefi_data' }
    ]}
>
<TabItem value="get_instance_uefi_data">

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
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance from which to retrieve the UEFI data.</td>
</tr>
<tr>
    <td><CopyableCode code="UefiData" /></td>
    <td><code>string</code></td>
    <td>Base64 representation of the non-volatile UEFI variable store.</td>
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
    <td><a href="#get_instance_uefi_data"><CopyableCode code="get_instance_uefi_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>A binary representation of the UEFI variable store. Only non-volatile variables are stored. This is a base64 encoded and zlib compressed binary value that must be properly encoded. When you use register-image to create an AMI, you can create an exact copy of your variable store by passing the UEFI data in the UefiData parameter. You can modify the UEFI data by using the python-uefivars tool on GitHub. You can use the tool to convert the UEFI data into a human-readable format (JSON), which you can inspect and modify, and then convert back into the binary format to use with register-image. For more information, see UEFI Secure Boot in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance from which to retrieve the UEFI data.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_instance_uefi_data"
    values={[
        { label: 'get_instance_uefi_data', value: 'get_instance_uefi_data' }
    ]}
>
<TabItem value="get_instance_uefi_data">

A binary representation of the UEFI variable store. Only non-volatile variables are stored. This is a base64 encoded and zlib compressed binary value that must be properly encoded. When you use register-image to create an AMI, you can create an exact copy of your variable store by passing the UEFI data in the UefiData parameter. You can modify the UEFI data by using the python-uefivars tool on GitHub. You can use the tool to convert the UEFI data into a human-readable format (JSON), which you can inspect and modify, and then convert back into the binary format to use with register-image. For more information, see UEFI Secure Boot in the Amazon EC2 User Guide.

```sql
SELECT
InstanceId,
UefiData
FROM aws.ec2.instance_uefi_datas
WHERE InstanceId = '{{ InstanceId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
