--- 
title: web_login_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - web_login_tokens
  - mwaa
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

Creates, updates, deletes, gets or lists a <code>web_login_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="web_login_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mwaa.web_login_tokens" /></td></tr>
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
    <td><a href="#create_web_login_token"><CopyableCode code="create_web_login_token" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a web login token for the Airflow Web UI. To learn more, see Creating an Apache Airflow web login token.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon MWAA environment. For example, MyMWAAEnvironment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_web_login_token"
    values={[
        { label: 'create_web_login_token', value: 'create_web_login_token' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_web_login_token">

Creates a web login token for the Airflow Web UI. To learn more, see Creating an Apache Airflow web login token.

```sql
INSERT INTO aws.mwaa.web_login_tokens (
name,
region
)
SELECT 
'{{ name }}',
'{{ region }}'
RETURNING
airflow_identity,
iam_identity,
web_server_hostname,
web_token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: web_login_tokens
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the web_login_tokens resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the web_login_tokens resource.
`}</CodeBlock>

</TabItem>
</Tabs>
