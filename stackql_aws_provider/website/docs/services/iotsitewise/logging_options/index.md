--- 
title: logging_options
hide_title: false
hide_table_of_contents: false
keywords:
  - logging_options
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>logging_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="logging_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.logging_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_logging_options"
    values={[
        { label: 'describe_logging_options', value: 'describe_logging_options' }
    ]}
>
<TabItem value="describe_logging_options">

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
    <td><CopyableCode code="level" /></td>
    <td><code>string</code></td>
    <td>The IoT SiteWise logging verbosity level. (ERROR, INFO, OFF)</td>
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
    <td><a href="#describe_logging_options"><CopyableCode code="describe_logging_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-workspaceName"><code>workspaceName</code></a></td>
    <td>Retrieves the current IoT SiteWise logging options.</td>
</tr>
<tr>
    <td><a href="#put_logging_options"><CopyableCode code="put_logging_options" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-loggingOptions"><code>loggingOptions</code></a></td>
    <td></td>
    <td>Sets logging options for IoT SiteWise.</td>
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
<tr id="parameter-workspaceName">
    <td><CopyableCode code="workspaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_logging_options"
    values={[
        { label: 'describe_logging_options', value: 'describe_logging_options' }
    ]}
>
<TabItem value="describe_logging_options">

Retrieves the current IoT SiteWise logging options.

```sql
SELECT
level
FROM aws.iotsitewise.logging_options
WHERE region = '{{ region }}' -- required
AND workspaceName = '{{ workspaceName }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_logging_options"
    values={[
        { label: 'put_logging_options', value: 'put_logging_options' }
    ]}
>
<TabItem value="put_logging_options">

Sets logging options for IoT SiteWise.

```sql
REPLACE aws.iotsitewise.logging_options
SET 
loggingOptions = '{{ loggingOptions }}',
workspaceName = '{{ workspaceName }}'
WHERE 
region = '{{ region }}' --required
AND loggingOptions = '{{ loggingOptions }}' --required;
```
</TabItem>
</Tabs>
