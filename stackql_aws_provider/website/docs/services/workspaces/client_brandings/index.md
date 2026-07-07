--- 
title: client_brandings
hide_title: false
hide_table_of_contents: false
keywords:
  - client_brandings
  - workspaces
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

Creates, updates, deletes, gets or lists a <code>client_brandings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="client_brandings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.client_brandings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_client_branding"
    values={[
        { label: 'describe_client_branding', value: 'describe_client_branding' }
    ]}
>
<TabItem value="describe_client_branding">

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
    <td><CopyableCode code="DeviceTypeAndroid" /></td>
    <td><code>object</code></td>
    <td>The branding information for Android devices.</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceTypeIos" /></td>
    <td><code>object</code></td>
    <td>The branding information for iOS devices.</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceTypeLinux" /></td>
    <td><code>object</code></td>
    <td>The branding information for Linux devices.</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceTypeOsx" /></td>
    <td><code>object</code></td>
    <td>The branding information for macOS devices.</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceTypeWeb" /></td>
    <td><code>object</code></td>
    <td>The branding information for Web access.</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceTypeWindows" /></td>
    <td><code>object</code></td>
    <td>The branding information for Windows devices.</td>
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
    <td><a href="#describe_client_branding"><CopyableCode code="describe_client_branding" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified client branding. Client branding allows you to customize the log in page of various device types for your users. You can add your company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in. Only device types that have branding information configured will be shown in the response.</td>
</tr>
<tr>
    <td><a href="#delete_client_branding"><CopyableCode code="delete_client_branding" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes customized client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in. After you delete your customized client branding, your login portal reverts to the default client branding.</td>
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
    defaultValue="describe_client_branding"
    values={[
        { label: 'describe_client_branding', value: 'describe_client_branding' }
    ]}
>
<TabItem value="describe_client_branding">

Describes the specified client branding. Client branding allows you to customize the log in page of various device types for your users. You can add your company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in. Only device types that have branding information configured will be shown in the response.

```sql
SELECT
DeviceTypeAndroid,
DeviceTypeIos,
DeviceTypeLinux,
DeviceTypeOsx,
DeviceTypeWeb,
DeviceTypeWindows
FROM aws.workspaces.client_brandings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_client_branding"
    values={[
        { label: 'delete_client_branding', value: 'delete_client_branding' }
    ]}
>
<TabItem value="delete_client_branding">

Deletes customized client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in. After you delete your customized client branding, your login portal reverts to the default client branding.

```sql
DELETE FROM aws.workspaces.client_brandings
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
