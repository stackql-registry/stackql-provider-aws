--- 
title: directory_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - directory_limits
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

Creates, updates, deletes, gets or lists a <code>directory_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="directory_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.directory_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_directory_limits"
    values={[
        { label: 'get_directory_limits', value: 'get_directory_limits' }
    ]}
>
<TabItem value="get_directory_limits">

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
    <td><CopyableCode code="CloudOnlyDirectoriesCurrentCount" /></td>
    <td><code>integer</code></td>
    <td>The current number of cloud directories in the Region.</td>
</tr>
<tr>
    <td><CopyableCode code="CloudOnlyDirectoriesLimit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of cloud directories allowed in the Region.</td>
</tr>
<tr>
    <td><CopyableCode code="CloudOnlyDirectoriesLimitReached" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the cloud directory limit has been reached.</td>
</tr>
<tr>
    <td><CopyableCode code="CloudOnlyMicrosoftADCurrentCount" /></td>
    <td><code>integer</code></td>
    <td>The current number of Managed Microsoft AD directories in the region.</td>
</tr>
<tr>
    <td><CopyableCode code="CloudOnlyMicrosoftADLimit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of Managed Microsoft AD directories allowed in the region.</td>
</tr>
<tr>
    <td><CopyableCode code="CloudOnlyMicrosoftADLimitReached" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the Managed Microsoft AD directory limit has been reached.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectedDirectoriesCurrentCount" /></td>
    <td><code>integer</code></td>
    <td>The current number of connected directories in the Region.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectedDirectoriesLimit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of connected directories allowed in the Region.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectedDirectoriesLimitReached" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the connected directory limit has been reached.</td>
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
    <td><a href="#get_directory_limits"><CopyableCode code="get_directory_limits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Obtains directory limit information for the current Region.</td>
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
    defaultValue="get_directory_limits"
    values={[
        { label: 'get_directory_limits', value: 'get_directory_limits' }
    ]}
>
<TabItem value="get_directory_limits">

Obtains directory limit information for the current Region.

```sql
SELECT
CloudOnlyDirectoriesCurrentCount,
CloudOnlyDirectoriesLimit,
CloudOnlyDirectoriesLimitReached,
CloudOnlyMicrosoftADCurrentCount,
CloudOnlyMicrosoftADLimit,
CloudOnlyMicrosoftADLimitReached,
ConnectedDirectoriesCurrentCount,
ConnectedDirectoriesLimit,
ConnectedDirectoriesLimitReached
FROM aws.ds.directory_limits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
