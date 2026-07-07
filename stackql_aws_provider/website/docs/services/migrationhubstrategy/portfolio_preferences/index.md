--- 
title: portfolio_preferences
hide_title: false
hide_table_of_contents: false
keywords:
  - portfolio_preferences
  - migrationhubstrategy
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

Creates, updates, deletes, gets or lists a <code>portfolio_preferences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="portfolio_preferences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migrationhubstrategy.portfolio_preferences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_portfolio_preferences"
    values={[
        { label: 'get_portfolio_preferences', value: 'get_portfolio_preferences' }
    ]}
>
<TabItem value="get_portfolio_preferences">

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
    <td><CopyableCode code="applicationMode" /></td>
    <td><code>string</code></td>
    <td>The classification for application component types. (ALL, KNOWN, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationPreferences" /></td>
    <td><code>object</code></td>
    <td>The transformation preferences for non-database applications.</td>
</tr>
<tr>
    <td><CopyableCode code="databasePreferences" /></td>
    <td><code>object</code></td>
    <td>The transformation preferences for database applications.</td>
</tr>
<tr>
    <td><CopyableCode code="prioritizeBusinessGoals" /></td>
    <td><code>object</code></td>
    <td>The rank of business goals based on priority.</td>
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
    <td><a href="#get_portfolio_preferences"><CopyableCode code="get_portfolio_preferences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves your migration and modernization preferences.</td>
</tr>
<tr>
    <td><a href="#put_portfolio_preferences"><CopyableCode code="put_portfolio_preferences" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Saves the specified migration and modernization preferences.</td>
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
    defaultValue="get_portfolio_preferences"
    values={[
        { label: 'get_portfolio_preferences', value: 'get_portfolio_preferences' }
    ]}
>
<TabItem value="get_portfolio_preferences">

Retrieves your migration and modernization preferences.

```sql
SELECT
applicationMode,
applicationPreferences,
databasePreferences,
prioritizeBusinessGoals
FROM aws.migrationhubstrategy.portfolio_preferences
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_portfolio_preferences"
    values={[
        { label: 'put_portfolio_preferences', value: 'put_portfolio_preferences' }
    ]}
>
<TabItem value="put_portfolio_preferences">

Saves the specified migration and modernization preferences.

```sql
REPLACE aws.migrationhubstrategy.portfolio_preferences
SET 
applicationMode = '{{ applicationMode }}',
applicationPreferences = '{{ applicationPreferences }}',
databasePreferences = '{{ databasePreferences }}',
prioritizeBusinessGoals = '{{ prioritizeBusinessGoals }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
