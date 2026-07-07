--- 
title: account_customizations
hide_title: false
hide_table_of_contents: false
keywords:
  - account_customizations
  - uxc
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

Creates, updates, deletes, gets or lists an <code>account_customizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_customizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.uxc.account_customizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_customizations"
    values={[
        { label: 'get_account_customizations', value: 'get_account_customizations' }
    ]}
>
<TabItem value="get_account_customizations">

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
    <td><CopyableCode code="accountColor" /></td>
    <td><code>string</code></td>
    <td>The account color preference. A value of none indicates that you have not set a color. (none, pink, purple, darkBlue, lightBlue, teal, green, yellow, orange, red)</td>
</tr>
<tr>
    <td><CopyableCode code="visibleRegions" /></td>
    <td><code>array</code></td>
    <td>The list of Amazon Web Services Region codes that are visible to the account in the Amazon Web Services Management Console. A value of null indicates that you have not configured this feature and all Regions are visible. For a list of valid Region codes, see Amazon Web Services Regions.</td>
</tr>
<tr>
    <td><CopyableCode code="visibleServices" /></td>
    <td><code>array</code></td>
    <td>The list of Amazon Web Services service identifiers that are visible to the account in the Amazon Web Services Management Console. A value of null indicates that you have not configured this feature and all services are visible. For valid service identifiers, call ListServices.</td>
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
    <td><a href="#get_account_customizations"><CopyableCode code="get_account_customizations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current account customization settings, including account color, visible services, and visible Regions. Settings that you have not configured return their default values: visible Regions and visible services return `null`, and account color returns `none`. The visibleServices and visibleRegions settings control only the appearance of services and Regions in the Amazon Web Services Management Console. They do not restrict access through the CLI, SDKs, or other APIs.</td>
</tr>
<tr>
    <td><a href="#update_account_customizations"><CopyableCode code="update_account_customizations" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates one or more account customization settings. You can update account color, visible services, and visible Regions in a single request. Only the settings that you include in the request body are modified. Omitted settings remain unchanged. To reset a setting to its default behavior, set the value to null for visible Regions and visible services, or none for account color. This operation is idempotent. The visibleServices and visibleRegions settings control only the appearance of services and Regions in the Amazon Web Services Management Console. They do not restrict access through the CLI, SDKs, or other APIs.</td>
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
    defaultValue="get_account_customizations"
    values={[
        { label: 'get_account_customizations', value: 'get_account_customizations' }
    ]}
>
<TabItem value="get_account_customizations">

Returns the current account customization settings, including account color, visible services, and visible Regions. Settings that you have not configured return their default values: visible Regions and visible services return `null`, and account color returns `none`. The visibleServices and visibleRegions settings control only the appearance of services and Regions in the Amazon Web Services Management Console. They do not restrict access through the CLI, SDKs, or other APIs.

```sql
SELECT
accountColor,
visibleRegions,
visibleServices
FROM aws.uxc.account_customizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account_customizations"
    values={[
        { label: 'update_account_customizations', value: 'update_account_customizations' }
    ]}
>
<TabItem value="update_account_customizations">

Updates one or more account customization settings. You can update account color, visible services, and visible Regions in a single request. Only the settings that you include in the request body are modified. Omitted settings remain unchanged. To reset a setting to its default behavior, set the value to null for visible Regions and visible services, or none for account color. This operation is idempotent. The visibleServices and visibleRegions settings control only the appearance of services and Regions in the Amazon Web Services Management Console. They do not restrict access through the CLI, SDKs, or other APIs.

```sql
UPDATE aws.uxc.account_customizations
SET 
accountColor = '{{ accountColor }}',
visibleServices = '{{ visibleServices }}',
visibleRegions = '{{ visibleRegions }}'
WHERE 
region = '{{ region }}' --required
RETURNING
accountColor,
visibleRegions,
visibleServices;
```
</TabItem>
</Tabs>
