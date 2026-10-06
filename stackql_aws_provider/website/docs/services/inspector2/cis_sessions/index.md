--- 
title: cis_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - cis_sessions
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>cis_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cis_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.cis_sessions" /></td></tr>
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
    <td><a href="#start_cis_session"><CopyableCode code="start_cis_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-scanJobId"><code>scanJobId</code></a>, <a href="#parameter-message"><code>message</code></a></td>
    <td></td>
    <td>Starts a CIS session. This API is used by the Amazon Inspector SSM plugin to communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls this API to start a CIS scan session for the scan ID supplied by the service.</td>
</tr>
<tr>
    <td><a href="#stop_cis_session"><CopyableCode code="stop_cis_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-scanJobId"><code>scanJobId</code></a>, <a href="#parameter-sessionToken"><code>sessionToken</code></a>, <a href="#parameter-message"><code>message</code></a></td>
    <td></td>
    <td>Stops a CIS session. This API is used by the Amazon Inspector SSM plugin to communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls this API to stop a CIS scan session for the scan ID supplied by the service.</td>
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
    defaultValue="start_cis_session"
    values={[
        { label: 'start_cis_session', value: 'start_cis_session' },
        { label: 'stop_cis_session', value: 'stop_cis_session' }
    ]}
>
<TabItem value="start_cis_session">

Starts a CIS session. This API is used by the Amazon Inspector SSM plugin to communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls this API to start a CIS scan session for the scan ID supplied by the service.

```sql
EXEC aws.inspector2.cis_sessions.start_cis_session 
@region='{{ region }}' --required 
@@json=
'{
"scanJobId": "{{ scanJobId }}", 
"message": "{{ message }}"
}'
;
```
</TabItem>
<TabItem value="stop_cis_session">

Stops a CIS session. This API is used by the Amazon Inspector SSM plugin to communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls this API to stop a CIS scan session for the scan ID supplied by the service.

```sql
EXEC aws.inspector2.cis_sessions.stop_cis_session 
@region='{{ region }}' --required 
@@json=
'{
"scanJobId": "{{ scanJobId }}", 
"sessionToken": "{{ sessionToken }}", 
"message": "{{ message }}"
}'
;
```
</TabItem>
</Tabs>
