--- 
title: release_labels
hide_title: false
hide_table_of_contents: false
keywords:
  - release_labels
  - emr
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

Creates, updates, deletes, gets or lists a <code>release_labels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="release_labels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.release_labels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_release_label"
    values={[
        { label: 'describe_release_label', value: 'describe_release_label' },
        { label: 'list_release_labels', value: 'list_release_labels' }
    ]}
>
<TabItem value="describe_release_label">

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
    <td><CopyableCode code="applications" /></td>
    <td><code>array</code></td>
    <td>The list of applications available for the target release label. Name is the name of the application. Version is the concise version of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="available_os_releases" /></td>
    <td><code>array</code></td>
    <td>The list of available Amazon Linux release versions for an Amazon EMR release. Contains a Label field that is formatted as shown in Amazon Linux 2 Release Notes . For example, 2.0.20220218.1.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token. Reserved for future use. Currently set to null.</td>
</tr>
<tr>
    <td><CopyableCode code="release_label" /></td>
    <td><code>string</code></td>
    <td>The target release label described in the response.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_release_labels">

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
    <td><CopyableCode code="release_label" /></td>
    <td><code>string</code></td>
    <td>The returned release labels.</td>
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
    <td><a href="#describe_release_label"><CopyableCode code="describe_release_label" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides Amazon EMR release label details, such as the releases available the Region where the API request is run, and the available applications for a specific Amazon EMR release label. Can also list Amazon EMR releases that support a specified version of Spark.</td>
</tr>
<tr>
    <td><a href="#list_release_labels"><CopyableCode code="list_release_labels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves release labels of Amazon EMR services in the Region where the API is called.</td>
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
    defaultValue="describe_release_label"
    values={[
        { label: 'describe_release_label', value: 'describe_release_label' },
        { label: 'list_release_labels', value: 'list_release_labels' }
    ]}
>
<TabItem value="describe_release_label">

Provides Amazon EMR release label details, such as the releases available the Region where the API request is run, and the available applications for a specific Amazon EMR release label. Can also list Amazon EMR releases that support a specified version of Spark.

```sql
SELECT
applications,
available_os_releases,
next_token,
release_label
FROM aws.emr.release_labels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_release_labels">

Retrieves release labels of Amazon EMR services in the Region where the API is called.

```sql
SELECT
release_label
FROM aws.emr.release_labels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
