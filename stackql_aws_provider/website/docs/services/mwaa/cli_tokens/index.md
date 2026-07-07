--- 
title: cli_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - cli_tokens
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

Creates, updates, deletes, gets or lists a <code>cli_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cli_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mwaa.cli_tokens" /></td></tr>
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
    <td><a href="#create_cli_token"><CopyableCode code="create_cli_token" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a CLI token for the Airflow CLI. To learn more, see Creating an Apache Airflow CLI token.</td>
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
    defaultValue="create_cli_token"
    values={[
        { label: 'create_cli_token', value: 'create_cli_token' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cli_token">

Creates a CLI token for the Airflow CLI. To learn more, see Creating an Apache Airflow CLI token.

```sql
INSERT INTO aws.mwaa.cli_tokens (
name,
region
)
SELECT 
'{{ name }}',
'{{ region }}'
RETURNING
CliToken,
WebServerHostname
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cli_tokens
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the cli_tokens resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cli_tokens resource.
`}</CodeBlock>

</TabItem>
</Tabs>
