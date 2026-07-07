--- 
title: gui_session_access_details
hide_title: false
hide_table_of_contents: false
keywords:
  - gui_session_access_details
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

Creates, updates, deletes, gets or lists a <code>gui_session_access_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gui_session_access_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.gui_session_access_details" /></td></tr>
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
    <td><a href="#create_gui_session_access_details"><CopyableCode code="create_gui_session_access_details" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceName"><code>resourceName</code></a></td>
    <td></td>
    <td>Creates two URLs that are used to access a virtual computer’s graphical user interface (GUI) session. The primary URL initiates a web-based Amazon DCV session to the virtual computer's application. The secondary URL initiates a web-based Amazon DCV session to the virtual computer's operating session. Use StartGUISession to open the session.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_gui_session_access_details"
    values={[
        { label: 'create_gui_session_access_details', value: 'create_gui_session_access_details' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_gui_session_access_details">

Creates two URLs that are used to access a virtual computer’s graphical user interface (GUI) session. The primary URL initiates a web-based Amazon DCV session to the virtual computer's application. The secondary URL initiates a web-based Amazon DCV session to the virtual computer's operating session. Use StartGUISession to open the session.

```sql
INSERT INTO aws.lightsail.gui_session_access_details (
resourceName,
region
)
SELECT 
'{{ resourceName }}' /* required */,
'{{ region }}'
RETURNING
failureReason,
percentageComplete,
resourceName,
sessions,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: gui_session_access_details
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the gui_session_access_details resource.
    - name: resourceName
      value: "{{ resourceName }}"
      description: |
        The resource name.
`}</CodeBlock>

</TabItem>
</Tabs>
