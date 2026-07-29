--- 
title: web_app_customizations
hide_title: false
hide_table_of_contents: false
keywords:
  - web_app_customizations
  - transfer
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

Creates, updates, deletes, gets or lists a <code>web_app_customizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="web_app_customizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transfer.web_app_customizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_web_app_customization"
    values={[
        { label: 'describe_web_app_customization', value: 'describe_web_app_customization' }
    ]}
>
<TabItem value="describe_web_app_customization">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Returns the Amazon Resource Name (ARN) for the web app. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="favicon_file" /></td>
    <td><code>string (byte)</code></td>
    <td>Returns an icon file data string (in base64 encoding).</td>
</tr>
<tr>
    <td><CopyableCode code="logo_file" /></td>
    <td><code>string (byte)</code></td>
    <td>Returns a logo file data string (in base64 encoding).</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Returns the page title that you defined for your web app.</td>
</tr>
<tr>
    <td><CopyableCode code="web_app_id" /></td>
    <td><code>string</code></td>
    <td>Returns the unique identifier for your web app. (pattern: &lt;code&gt;webapp-&#91;0-9a-f&#93;&#123;17&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_web_app_customization"><CopyableCode code="describe_web_app_customization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the web app customization object that's identified by WebAppId.</td>
</tr>
<tr>
    <td><a href="#update_web_app_customization"><CopyableCode code="update_web_app_customization" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WebAppId"><code>WebAppId</code></a></td>
    <td></td>
    <td>Assigns new customization properties to a web app. You can modify the icon file, logo file, and title.</td>
</tr>
<tr>
    <td><a href="#delete_web_app_customization"><CopyableCode code="delete_web_app_customization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the WebAppCustomization object that corresponds to the web app ID specified.</td>
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
    defaultValue="describe_web_app_customization"
    values={[
        { label: 'describe_web_app_customization', value: 'describe_web_app_customization' }
    ]}
>
<TabItem value="describe_web_app_customization">

Describes the web app customization object that's identified by WebAppId.

```sql
SELECT
arn,
favicon_file,
logo_file,
title,
web_app_id
FROM aws.transfer.web_app_customizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_web_app_customization"
    values={[
        { label: 'update_web_app_customization', value: 'update_web_app_customization' }
    ]}
>
<TabItem value="update_web_app_customization">

Assigns new customization properties to a web app. You can modify the icon file, logo file, and title.

```sql
UPDATE aws.transfer.web_app_customizations
SET 
WebAppId = '{{ WebAppId }}',
Title = '{{ Title }}',
LogoFile = '{{ LogoFile }}',
FaviconFile = '{{ FaviconFile }}'
WHERE 
region = '{{ region }}' --required
AND WebAppId = '{{ WebAppId }}' --required
RETURNING
web_app_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_web_app_customization"
    values={[
        { label: 'delete_web_app_customization', value: 'delete_web_app_customization' }
    ]}
>
<TabItem value="delete_web_app_customization">

Deletes the WebAppCustomization object that corresponds to the web app ID specified.

```sql
DELETE FROM aws.transfer.web_app_customizations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
