--- 
title: terminologies
hide_title: false
hide_table_of_contents: false
keywords:
  - terminologies
  - translate
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

Creates, updates, deletes, gets or lists a <code>terminologies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="terminologies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.translate.terminologies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_terminology"
    values={[
        { label: 'get_terminology', value: 'get_terminology' }
    ]}
>
<TabItem value="get_terminology">

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
    <td><CopyableCode code="AuxiliaryDataLocation" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location of a file that provides any errors or warnings that were produced by your input file. This file was created when Amazon Translate attempted to create a terminology resource. The location is returned as a presigned URL to that has a 30-minute expiration.</td>
</tr>
<tr>
    <td><CopyableCode code="TerminologyDataLocation" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location of the most recent custom terminology input file that was successfully imported into Amazon Translate. The location is returned as a presigned URL that has a 30-minute expiration. Amazon Translate doesn't scan all input files for the risk of CSV injection attacks. CSV injection occurs when a .csv or .tsv file is altered so that a record contains malicious code. The record begins with a special character, such as =, +, -, or @. When the file is opened in a spreadsheet program, the program might interpret the record as a formula and run the code within it. Before you download an input file from Amazon S3, ensure that you recognize the file and trust its creator.</td>
</tr>
<tr>
    <td><CopyableCode code="TerminologyProperties" /></td>
    <td><code>object</code></td>
    <td>The properties of the custom terminology being retrieved.</td>
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
    <td><a href="#get_terminology"><CopyableCode code="get_terminology" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a custom terminology.</td>
</tr>
<tr>
    <td><a href="#delete_terminology"><CopyableCode code="delete_terminology" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A synchronous action that deletes a custom terminology.</td>
</tr>
<tr>
    <td><a href="#list_terminologies"><CopyableCode code="list_terminologies" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of custom terminologies associated with your account.</td>
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
    defaultValue="get_terminology"
    values={[
        { label: 'get_terminology', value: 'get_terminology' }
    ]}
>
<TabItem value="get_terminology">

Retrieves a custom terminology.

```sql
SELECT
AuxiliaryDataLocation,
TerminologyDataLocation,
TerminologyProperties
FROM aws.translate.terminologies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_terminology"
    values={[
        { label: 'delete_terminology', value: 'delete_terminology' }
    ]}
>
<TabItem value="delete_terminology">

A synchronous action that deletes a custom terminology.

```sql
DELETE FROM aws.translate.terminologies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_terminologies"
    values={[
        { label: 'list_terminologies', value: 'list_terminologies' }
    ]}
>
<TabItem value="list_terminologies">

Provides a list of custom terminologies associated with your account.

```sql
EXEC aws.translate.terminologies.list_terminologies 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
