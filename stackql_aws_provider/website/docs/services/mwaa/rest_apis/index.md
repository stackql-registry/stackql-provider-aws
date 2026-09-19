--- 
title: rest_apis
hide_title: false
hide_table_of_contents: false
keywords:
  - rest_apis
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

Creates, updates, deletes, gets or lists a <code>rest_apis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rest_apis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mwaa.rest_apis" /></td></tr>
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
    <td><a href="#invoke_rest_api"><CopyableCode code="invoke_rest_api" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Path"><code>Path</code></a>, <a href="#parameter-Method"><code>Method</code></a></td>
    <td></td>
    <td>Invokes the Apache Airflow REST API on the webserver with the specified inputs. To learn more, see Using the Apache Airflow REST API</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="invoke_rest_api"
    values={[
        { label: 'invoke_rest_api', value: 'invoke_rest_api' }
    ]}
>
<TabItem value="invoke_rest_api">

Invokes the Apache Airflow REST API on the webserver with the specified inputs. To learn more, see Using the Apache Airflow REST API

```sql
EXEC aws.mwaa.rest_apis.invoke_rest_api 
@name='{{ name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Path": "{{ Path }}", 
"Method": "{{ Method }}", 
"QueryParameters": "{{ QueryParameters }}", 
"Body": "{{ Body }}"
}'
;
```
</TabItem>
</Tabs>
