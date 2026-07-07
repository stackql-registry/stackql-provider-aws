--- 
title: default_application_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - default_application_settings
  - opensearch
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

Creates, updates, deletes, gets or lists a <code>default_application_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_application_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.default_application_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_default_application_setting"
    values={[
        { label: 'get_default_application_setting', value: 'get_default_application_setting' }
    ]}
>
<TabItem value="get_default_application_setting">

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
    <td><CopyableCode code="applicationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the domain. See Identifiers for IAM Entities in Using Amazon Web Services Identity and Access Management for more information. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#get_default_application_setting"><CopyableCode code="get_default_application_setting" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the ARN of the current default application. If the default application isn't set, the operation returns a resource not found error.</td>
</tr>
<tr>
    <td><a href="#put_default_application_setting"><CopyableCode code="put_default_application_setting" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationArn"><code>applicationArn</code></a>, <a href="#parameter-setAsDefault"><code>setAsDefault</code></a></td>
    <td></td>
    <td>Sets the default application to the application with the specified ARN. To remove the default application, use the GetDefaultApplicationSetting operation to get the current default and then call the PutDefaultApplicationSetting with the current applications ARN and the setAsDefault parameter set to false.</td>
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
    defaultValue="get_default_application_setting"
    values={[
        { label: 'get_default_application_setting', value: 'get_default_application_setting' }
    ]}
>
<TabItem value="get_default_application_setting">

Gets the ARN of the current default application. If the default application isn't set, the operation returns a resource not found error.

```sql
SELECT
applicationArn
FROM aws.opensearch.default_application_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_default_application_setting"
    values={[
        { label: 'put_default_application_setting', value: 'put_default_application_setting' }
    ]}
>
<TabItem value="put_default_application_setting">

Sets the default application to the application with the specified ARN. To remove the default application, use the GetDefaultApplicationSetting operation to get the current default and then call the PutDefaultApplicationSetting with the current applications ARN and the setAsDefault parameter set to false.

```sql
REPLACE aws.opensearch.default_application_settings
SET 
applicationArn = '{{ applicationArn }}',
setAsDefault = {{ setAsDefault }}
WHERE 
region = '{{ region }}' --required
AND applicationArn = '{{ applicationArn }}' --required
AND setAsDefault = {{ setAsDefault }} --required
RETURNING
applicationArn;
```
</TabItem>
</Tabs>
