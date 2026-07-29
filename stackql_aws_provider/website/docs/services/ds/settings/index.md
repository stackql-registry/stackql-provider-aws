--- 
title: settings
hide_title: false
hide_table_of_contents: false
keywords:
  - settings
  - ds
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

Creates, updates, deletes, gets or lists a <code>settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_settings"
    values={[
        { label: 'describe_settings', value: 'describe_settings' }
    ]}
>
<TabItem value="describe_settings">

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
    <td><CopyableCode code="directory_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the directory. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If not null, token that indicates that more results are available. Pass this value for the NextToken parameter in a subsequent call to DescribeSettings to retrieve the next set of items.</td>
</tr>
<tr>
    <td><CopyableCode code="setting_entries" /></td>
    <td><code>array</code></td>
    <td>The list of SettingEntry objects that were retrieved. It is possible that this list contains less than the number of items specified in the Limit member of the request. This occurs if there are less than the requested number of items left to retrieve, or if the limitations of the operation have been exceeded.</td>
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
    <td><a href="#describe_settings"><CopyableCode code="describe_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the configurable settings for the specified directory.</td>
</tr>
<tr>
    <td><a href="#update_settings"><CopyableCode code="update_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-Settings"><code>Settings</code></a></td>
    <td></td>
    <td>Updates the configurable settings for the specified directory.</td>
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
    defaultValue="describe_settings"
    values={[
        { label: 'describe_settings', value: 'describe_settings' }
    ]}
>
<TabItem value="describe_settings">

Retrieves information about the configurable settings for the specified directory.

```sql
SELECT
directory_id,
next_token,
setting_entries
FROM aws.ds.settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_settings"
    values={[
        { label: 'update_settings', value: 'update_settings' }
    ]}
>
<TabItem value="update_settings">

Updates the configurable settings for the specified directory.

```sql
UPDATE aws.ds.settings
SET 
DirectoryId = '{{ DirectoryId }}',
Settings = '{{ Settings }}'
WHERE 
region = '{{ region }}' --required
AND DirectoryId = '{{ DirectoryId }}' --required
AND Settings = '{{ Settings }}' --required
RETURNING
directory_id;
```
</TabItem>
</Tabs>
