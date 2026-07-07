--- 
title: service_role_to_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - service_role_to_accounts
  - greengrassv2
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

Creates, updates, deletes, gets or lists a <code>service_role_to_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_role_to_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrassv2.service_role_to_accounts" /></td></tr>
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
    <td><a href="#associate_service_role_to_account"><CopyableCode code="associate_service_role_to_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Associates a Greengrass service role with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. The role must include the AWSGreengrassResourceAccessRolePolicy managed policy or a custom policy that defines equivalent permissions for the IoT Greengrass features that you use. For more information, see Greengrass service role in the IoT Greengrass Version 2 Developer Guide.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="associate_service_role_to_account"
    values={[
        { label: 'associate_service_role_to_account', value: 'associate_service_role_to_account' }
    ]}
>
<TabItem value="associate_service_role_to_account">

Associates a Greengrass service role with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. The role must include the AWSGreengrassResourceAccessRolePolicy managed policy or a custom policy that defines equivalent permissions for the IoT Greengrass features that you use. For more information, see Greengrass service role in the IoT Greengrass Version 2 Developer Guide.

```sql
UPDATE aws.greengrassv2.service_role_to_accounts
SET 
roleArn = '{{ roleArn }}'
WHERE 
region = '{{ region }}' --required
AND roleArn = '{{ roleArn }}' --required
RETURNING
associatedAt;
```
</TabItem>
</Tabs>
