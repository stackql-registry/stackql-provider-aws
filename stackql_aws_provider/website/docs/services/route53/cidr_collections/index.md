--- 
title: cidr_collections
hide_title: false
hide_table_of_contents: false
keywords:
  - cidr_collections
  - route53
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

Creates, updates, deletes, gets or lists a <code>cidr_collections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cidr_collections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.cidr_collections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cidr_collections"
    values={[
        { label: 'list_cidr_collections', value: 'list_cidr_collections' }
    ]}
>
<TabItem value="list_cidr_collections">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the collection summary. Can be used to reference the collection in IAM policy or cross-account.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>Unique ID for the CIDR collection.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of a CIDR collection.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer</code></td>
    <td>A sequential counter that Route 53 sets to 1 when you create a CIDR collection and increments by 1 each time you update settings for the CIDR collection.</td>
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
    <td><a href="#list_cidr_collections"><CopyableCode code="list_cidr_collections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nexttoken"><code>nexttoken</code></a>, <a href="#parameter-maxresults"><code>maxresults</code></a></td>
    <td>Returns a paginated list of CIDR collections in the Amazon Web Services account (metadata only).</td>
</tr>
<tr>
    <td><a href="#create_cidr_collection"><CopyableCode code="create_cidr_collection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CallerReference"><code>CallerReference</code></a></td>
    <td></td>
    <td>Creates a CIDR collection in the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#delete_cidr_collection"><CopyableCode code="delete_cidr_collection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cidr_collection_id"><code>cidr_collection_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a CIDR collection in the current Amazon Web Services account. The collection must be empty before it can be deleted.</td>
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
<tr id="parameter-cidr_collection_id">
    <td><CopyableCode code="cidr_collection_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the collection to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxresults">
    <td><CopyableCode code="maxresults" /></td>
    <td><code>string</code></td>
    <td>The maximum number of CIDR collections to return in the response.</td>
</tr>
<tr id="parameter-nexttoken">
    <td><CopyableCode code="nexttoken" /></td>
    <td><code>string</code></td>
    <td>An opaque pagination token to indicate where the service is to begin enumerating results. If no value is provided, the listing of results starts from the beginning.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_cidr_collections"
    values={[
        { label: 'list_cidr_collections', value: 'list_cidr_collections' }
    ]}
>
<TabItem value="list_cidr_collections">

Returns a paginated list of CIDR collections in the Amazon Web Services account (metadata only).

```sql
SELECT
Arn,
Id,
Name,
Version
FROM aws.route53.cidr_collections
WHERE region = '{{ region }}' -- required
AND nexttoken = '{{ nexttoken }}'
AND maxresults = '{{ maxresults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cidr_collection"
    values={[
        { label: 'create_cidr_collection', value: 'create_cidr_collection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cidr_collection">

Creates a CIDR collection in the current Amazon Web Services account.

```sql
INSERT INTO aws.route53.cidr_collections (
Name,
CallerReference,
region
)
SELECT 
'{{ Name }}',
'{{ CallerReference }}' /* required */,
'{{ region }}'
RETURNING
Collection,
Location
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cidr_collections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cidr_collections resource.
    - name: Name
      value: "{{ Name }}"
    - name: CallerReference
      value: "{{ CallerReference }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cidr_collection"
    values={[
        { label: 'delete_cidr_collection', value: 'delete_cidr_collection' }
    ]}
>
<TabItem value="delete_cidr_collection">

Deletes a CIDR collection in the current Amazon Web Services account. The collection must be empty before it can be deleted.

```sql
DELETE FROM aws.route53.cidr_collections
WHERE cidr_collection_id = '{{ cidr_collection_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
