--- 
title: account_preferences
hide_title: false
hide_table_of_contents: false
keywords:
  - account_preferences
  - efs
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

Creates, updates, deletes, gets or lists an <code>account_preferences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_preferences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.efs.account_preferences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account_preferences"
    values={[
        { label: 'describe_account_preferences', value: 'describe_account_preferences' }
    ]}
>
<TabItem value="describe_account_preferences">

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
    <td><CopyableCode code="resource_id_type" /></td>
    <td><code>string</code></td>
    <td>Identifies the EFS resource ID preference, either LONG_ID (17 characters) or SHORT_ID (8 characters). (LONG_ID, SHORT_ID)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>Identifies the Amazon EFS resources to which the ID preference setting applies, FILE_SYSTEM and MOUNT_TARGET.</td>
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
    <td><a href="#describe_account_preferences"><CopyableCode code="describe_account_preferences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the account preferences settings for the Amazon Web Services account associated with the user making the request, in the current Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#put_account_preferences"><CopyableCode code="put_account_preferences" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceIdType"><code>ResourceIdType</code></a></td>
    <td></td>
    <td>Use this operation to set the account preference in the current Amazon Web Services Region to use long 17 character (63 bit) or short 8 character (32 bit) resource IDs for new EFS file system and mount target resources. All existing resource IDs are not affected by any changes you make. You can set the ID preference during the opt-in period as EFS transitions to long resource IDs. For more information, see Managing Amazon EFS resource IDs. Starting in October, 2021, you will receive an error if you try to set the account preference to use the short 8 character format resource ID. Contact Amazon Web Services support if you receive an error and must use short IDs for file system and mount target resources.</td>
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
    defaultValue="describe_account_preferences"
    values={[
        { label: 'describe_account_preferences', value: 'describe_account_preferences' }
    ]}
>
<TabItem value="describe_account_preferences">

Returns the account preferences settings for the Amazon Web Services account associated with the user making the request, in the current Amazon Web Services Region.

```sql
SELECT
resource_id_type,
resources
FROM aws.efs.account_preferences
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_account_preferences"
    values={[
        { label: 'put_account_preferences', value: 'put_account_preferences' }
    ]}
>
<TabItem value="put_account_preferences">

Use this operation to set the account preference in the current Amazon Web Services Region to use long 17 character (63 bit) or short 8 character (32 bit) resource IDs for new EFS file system and mount target resources. All existing resource IDs are not affected by any changes you make. You can set the ID preference during the opt-in period as EFS transitions to long resource IDs. For more information, see Managing Amazon EFS resource IDs. Starting in October, 2021, you will receive an error if you try to set the account preference to use the short 8 character format resource ID. Contact Amazon Web Services support if you receive an error and must use short IDs for file system and mount target resources.

```sql
REPLACE aws.efs.account_preferences
SET 
ResourceIdType = '{{ ResourceIdType }}'
WHERE 
region = '{{ region }}' --required
AND ResourceIdType = '{{ ResourceIdType }}' --required
RETURNING
resource_id_preference;
```
</TabItem>
</Tabs>
