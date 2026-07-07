--- 
title: public_sharing_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - public_sharing_settings
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>public_sharing_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="public_sharing_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.public_sharing_settings" /></td></tr>
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
    <td><a href="#update_public_sharing_settings"><CopyableCode code="update_public_sharing_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API controls public sharing settings for your entire Quick Sight account, affecting data security and access. When you enable public sharing: Dashboards can be shared publicly This setting affects your entire Amazon Web Services account and all Quick Sight users Before proceeding: Ensure you understand the security implications and have proper IAM permissions configured. Use the UpdatePublicSharingSettings operation to turn on or turn off the public sharing settings of an Amazon Quick Sight dashboard. To use this operation, turn on session capacity pricing for your Amazon Quick Sight account. Before you can turn on public sharing on your account, make sure to give public sharing permissions to an administrative user in the Identity and Access Management (IAM) console. For more information on using IAM with Amazon Quick Sight, see Using Quick with IAM in the Amazon Quick Sight User Guide.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with your Amazon Quick Sight subscription.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="update_public_sharing_settings"
    values={[
        { label: 'update_public_sharing_settings', value: 'update_public_sharing_settings' }
    ]}
>
<TabItem value="update_public_sharing_settings">

This API controls public sharing settings for your entire Quick Sight account, affecting data security and access. When you enable public sharing: Dashboards can be shared publicly This setting affects your entire Amazon Web Services account and all Quick Sight users Before proceeding: Ensure you understand the security implications and have proper IAM permissions configured. Use the UpdatePublicSharingSettings operation to turn on or turn off the public sharing settings of an Amazon Quick Sight dashboard. To use this operation, turn on session capacity pricing for your Amazon Quick Sight account. Before you can turn on public sharing on your account, make sure to give public sharing permissions to an administrative user in the Identity and Access Management (IAM) console. For more information on using IAM with Amazon Quick Sight, see Using Quick with IAM in the Amazon Quick Sight User Guide.

```sql
UPDATE aws.quicksight.public_sharing_settings
SET 
PublicSharingEnabled = {{ PublicSharingEnabled }}
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
RETURNING
RequestId,
Status;
```
</TabItem>
</Tabs>
