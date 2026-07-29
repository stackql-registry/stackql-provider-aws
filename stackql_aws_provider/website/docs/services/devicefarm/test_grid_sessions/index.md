--- 
title: test_grid_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - test_grid_sessions
  - devicefarm
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

Creates, updates, deletes, gets or lists a <code>test_grid_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_grid_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.test_grid_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_test_grid_sessions"
    values={[
        { label: 'list_test_grid_sessions', value: 'list_test_grid_sessions' },
        { label: 'get_test_grid_session', value: 'get_test_grid_session' }
    ]}
>
<TabItem value="list_test_grid_sessions">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Pagination token.</td>
</tr>
<tr>
    <td><CopyableCode code="test_grid_sessions" /></td>
    <td><code>array</code></td>
    <td>The sessions that match the criteria in a ListTestGridSessionsRequest.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_test_grid_session">

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
    <td>The ARN of the session. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_minutes" /></td>
    <td><code>number (double)</code></td>
    <td>The number of billed minutes that were used for this session.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the session was started.</td>
</tr>
<tr>
    <td><CopyableCode code="ended" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the session ended.</td>
</tr>
<tr>
    <td><CopyableCode code="selenium_properties" /></td>
    <td><code>string</code></td>
    <td>A JSON object of options and parameters passed to the Selenium WebDriver.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The state of the session. (ACTIVE, CLOSED, ERRORED)</td>
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
    <td><a href="#list_test_grid_sessions"><CopyableCode code="list_test_grid_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of sessions for a TestGridProject.</td>
</tr>
<tr>
    <td><a href="#get_test_grid_session"><CopyableCode code="get_test_grid_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A session is an instance of a browser created through a RemoteWebDriver with the URL from CreateTestGridUrlResult$url. You can use the following to look up sessions: The session ARN (GetTestGridSessionRequest$sessionArn). The project ARN and a session ID (GetTestGridSessionRequest$projectArn and GetTestGridSessionRequest$sessionId).</td>
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
    defaultValue="list_test_grid_sessions"
    values={[
        { label: 'list_test_grid_sessions', value: 'list_test_grid_sessions' },
        { label: 'get_test_grid_session', value: 'get_test_grid_session' }
    ]}
>
<TabItem value="list_test_grid_sessions">

Retrieves a list of sessions for a TestGridProject.

```sql
SELECT
next_token,
test_grid_sessions
FROM aws.devicefarm.test_grid_sessions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_test_grid_session">

A session is an instance of a browser created through a RemoteWebDriver with the URL from CreateTestGridUrlResult$url. You can use the following to look up sessions: The session ARN (GetTestGridSessionRequest$sessionArn). The project ARN and a session ID (GetTestGridSessionRequest$projectArn and GetTestGridSessionRequest$sessionId).

```sql
SELECT
arn,
billing_minutes,
created,
ended,
selenium_properties,
status
FROM aws.devicefarm.test_grid_sessions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
