--- 
title: revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - revisions
  - dataexchange
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

Creates, updates, deletes, gets or lists a <code>revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="revisions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dataexchange.revisions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_revision"
    values={[
        { label: 'get_revision', value: 'get_revision' }
    ]}
>
<TabItem value="get_revision">

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
    <td>The ARN for the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="Comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment about the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the revision was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSetId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the data set associated with the data set revision. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Finalized" /></td>
    <td><code>boolean</code></td>
    <td>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the revision. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RevocationComment" /></td>
    <td><code>string</code></td>
    <td>A required comment to inform subscribers of the reason their access to the revision was revoked.</td>
</tr>
<tr>
    <td><CopyableCode code="Revoked" /></td>
    <td><code>boolean</code></td>
    <td>A status indicating that subscribers' access to the revision was revoked.</td>
</tr>
<tr>
    <td><CopyableCode code="RevokedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the revision was revoked, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceId" /></td>
    <td><code>string</code></td>
    <td>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags for the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the revision was last updated, in ISO 8601 format.</td>
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
    <td><a href="#get_revision"><CopyableCode code="get_revision" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-revision_id"><code>revision_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation returns information about a revision.</td>
</tr>
<tr>
    <td><a href="#create_revision"><CopyableCode code="create_revision" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation creates a revision for a data set.</td>
</tr>
<tr>
    <td><a href="#revoke_revision"><CopyableCode code="revoke_revision" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-revision_id"><code>revision_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RevocationComment"><code>RevocationComment</code></a></td>
    <td></td>
    <td>This operation revokes subscribers' access to a revision.</td>
</tr>
<tr>
    <td><a href="#update_revision"><CopyableCode code="update_revision" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-revision_id"><code>revision_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation updates a revision.</td>
</tr>
<tr>
    <td><a href="#delete_revision"><CopyableCode code="delete_revision" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-revision_id"><code>revision_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation deletes a revision.</td>
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
<tr id="parameter-data_set_id">
    <td><CopyableCode code="data_set_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for a data set.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-revision_id">
    <td><CopyableCode code="revision_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for a revision.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_revision"
    values={[
        { label: 'get_revision', value: 'get_revision' }
    ]}
>
<TabItem value="get_revision">

This operation returns information about a revision.

```sql
SELECT
Arn,
Comment,
CreatedAt,
DataSetId,
Finalized,
Id,
RevocationComment,
Revoked,
RevokedAt,
SourceId,
Tags,
UpdatedAt
FROM aws.dataexchange.revisions
WHERE data_set_id = '{{ data_set_id }}' -- required
AND revision_id = '{{ revision_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_revision"
    values={[
        { label: 'create_revision', value: 'create_revision' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_revision">

This operation creates a revision for a data set.

```sql
INSERT INTO aws.dataexchange.revisions (
Comment,
Tags,
data_set_id,
region
)
SELECT 
'{{ Comment }}',
'{{ Tags }}',
'{{ data_set_id }}',
'{{ region }}'
RETURNING
Arn,
Comment,
CreatedAt,
DataSetId,
Finalized,
Id,
RevocationComment,
Revoked,
RevokedAt,
SourceId,
Tags,
UpdatedAt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: revisions
  props:
    - name: data_set_id
      value: "{{ data_set_id }}"
      description: Required parameter for the revisions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the revisions resource.
    - name: Comment
      value: "{{ Comment }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="revoke_revision"
    values={[
        { label: 'revoke_revision', value: 'revoke_revision' },
        { label: 'update_revision', value: 'update_revision' }
    ]}
>
<TabItem value="revoke_revision">

This operation revokes subscribers' access to a revision.

```sql
UPDATE aws.dataexchange.revisions
SET 
RevocationComment = '{{ RevocationComment }}'
WHERE 
data_set_id = '{{ data_set_id }}' --required
AND revision_id = '{{ revision_id }}' --required
AND region = '{{ region }}' --required
AND RevocationComment = '{{ RevocationComment }}' --required
RETURNING
Arn,
Comment,
CreatedAt,
DataSetId,
Finalized,
Id,
RevocationComment,
Revoked,
RevokedAt,
SourceId,
UpdatedAt;
```
</TabItem>
<TabItem value="update_revision">

This operation updates a revision.

```sql
UPDATE aws.dataexchange.revisions
SET 
Comment = '{{ Comment }}',
Finalized = {{ Finalized }}
WHERE 
data_set_id = '{{ data_set_id }}' --required
AND revision_id = '{{ revision_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Arn,
Comment,
CreatedAt,
DataSetId,
Finalized,
Id,
RevocationComment,
Revoked,
RevokedAt,
SourceId,
UpdatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_revision"
    values={[
        { label: 'delete_revision', value: 'delete_revision' }
    ]}
>
<TabItem value="delete_revision">

This operation deletes a revision.

```sql
DELETE FROM aws.dataexchange.revisions
WHERE data_set_id = '{{ data_set_id }}' --required
AND revision_id = '{{ revision_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
