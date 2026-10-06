--- 
title: gui_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - gui_sessions
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>gui_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gui_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.gui_sessions" /></td></tr>
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
    <td><a href="#start_gui_session"><CopyableCode code="start_gui_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceName"><code>resourceName</code></a></td>
    <td></td>
    <td>Initiates a graphical user interface (GUI) session that’s used to access a virtual computer’s operating system and application. The session will be active for 1 hour. Use this action to resume the session after it expires.</td>
</tr>
<tr>
    <td><a href="#stop_gui_session"><CopyableCode code="stop_gui_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceName"><code>resourceName</code></a></td>
    <td></td>
    <td>Terminates a web-based Amazon DCV session that’s used to access a virtual computer’s operating system or application. The session will close and any unsaved data will be lost.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="start_gui_session"
    values={[
        { label: 'start_gui_session', value: 'start_gui_session' },
        { label: 'stop_gui_session', value: 'stop_gui_session' }
    ]}
>
<TabItem value="start_gui_session">

Initiates a graphical user interface (GUI) session that’s used to access a virtual computer’s operating system and application. The session will be active for 1 hour. Use this action to resume the session after it expires.

```sql
EXEC aws.lightsail.gui_sessions.start_gui_session 
@region='{{ region }}' --required 
@@json=
'{
"resourceName": "{{ resourceName }}"
}'
;
```
</TabItem>
<TabItem value="stop_gui_session">

Terminates a web-based Amazon DCV session that’s used to access a virtual computer’s operating system or application. The session will close and any unsaved data will be lost.

```sql
EXEC aws.lightsail.gui_sessions.stop_gui_session 
@region='{{ region }}' --required 
@@json=
'{
"resourceName": "{{ resourceName }}"
}'
;
```
</TabItem>
</Tabs>
