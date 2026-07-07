--- 
title: links
hide_title: false
hide_table_of_contents: false
keywords:
  - links
  - oam
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

Creates, updates, deletes, gets or lists a <code>links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.oam.links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_link"
    values={[
        { label: 'get_link', value: 'get_link' },
        { label: 'list_links', value: 'list_links' }
    ]}
>
<TabItem value="get_link">

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
    <td>The ARN of the link.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The random ID string that Amazon Web Services generated as part of the link ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="Label" /></td>
    <td><code>string</code></td>
    <td>The label that you assigned to this link, with the variables resolved to their actual values.</td>
</tr>
<tr>
    <td><CopyableCode code="LabelTemplate" /></td>
    <td><code>string</code></td>
    <td>The exact label template that was specified when the link was created, with the template variables not resolved.</td>
</tr>
<tr>
    <td><CopyableCode code="LinkConfiguration" /></td>
    <td><code>object</code></td>
    <td>Use this structure to optionally create filters that specify that only some metric namespaces or log groups are to be shared from the source account to the monitoring account.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceTypes" /></td>
    <td><code>array</code></td>
    <td>The resource types supported by this link.</td>
</tr>
<tr>
    <td><CopyableCode code="SinkArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the sink that is used for this link.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the link.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_links">

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
    <td>The ARN of the link.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The random ID string that Amazon Web Services generated as part of the link ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="Label" /></td>
    <td><code>string</code></td>
    <td>The label that was assigned to this link at creation, with the variables resolved to their actual values.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceTypes" /></td>
    <td><code>array</code></td>
    <td>The resource types supported by this link.</td>
</tr>
<tr>
    <td><CopyableCode code="SinkArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the sink that this link is attached to.</td>
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
    <td><a href="#get_link"><CopyableCode code="get_link" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns complete information about one link. To use this operation, provide the link ARN. To retrieve a list of link ARNs, use ListLinks.</td>
</tr>
<tr>
    <td><a href="#list_links"><CopyableCode code="list_links" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this operation in a source account to return a list of links to monitoring account sinks that this source account has. To find a list of links for one monitoring account sink, use ListAttachedLinks from within the monitoring account.</td>
</tr>
<tr>
    <td><a href="#create_link"><CopyableCode code="create_link" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LabelTemplate"><code>LabelTemplate</code></a>, <a href="#parameter-ResourceTypes"><code>ResourceTypes</code></a>, <a href="#parameter-SinkIdentifier"><code>SinkIdentifier</code></a></td>
    <td></td>
    <td>Creates a link between a source account and a sink that you have created in a monitoring account. After the link is created, data is sent from the source account to the monitoring account. When you create a link, you can optionally specify filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account. Before you create a link, you must create a sink in the monitoring account and create a sink policy in that account. The sink policy must permit the source account to link to it. You can grant permission to source accounts by granting permission to an entire organization or to individual accounts. For more information, see CreateSink and PutSinkPolicy. Each monitoring account can be linked to as many as 100,000 source accounts. Each source account can be linked to as many as five monitoring accounts.</td>
</tr>
<tr>
    <td><a href="#update_link"><CopyableCode code="update_link" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a>, <a href="#parameter-ResourceTypes"><code>ResourceTypes</code></a></td>
    <td></td>
    <td>Use this operation to change what types of data are shared from a source account to its linked monitoring account sink. You can't change the sink or change the monitoring account with this operation. When you update a link, you can optionally specify filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account. To update the list of tags associated with the sink, use TagResource.</td>
</tr>
<tr>
    <td><a href="#delete_link"><CopyableCode code="delete_link" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a link between a monitoring account sink and a source account. You must run this operation in the source account.</td>
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
    defaultValue="get_link"
    values={[
        { label: 'get_link', value: 'get_link' },
        { label: 'list_links', value: 'list_links' }
    ]}
>
<TabItem value="get_link">

Returns complete information about one link. To use this operation, provide the link ARN. To retrieve a list of link ARNs, use ListLinks.

```sql
SELECT
Arn,
Id,
Label,
LabelTemplate,
LinkConfiguration,
ResourceTypes,
SinkArn,
Tags
FROM aws.oam.links
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_links">

Use this operation in a source account to return a list of links to monitoring account sinks that this source account has. To find a list of links for one monitoring account sink, use ListAttachedLinks from within the monitoring account.

```sql
SELECT
Arn,
Id,
Label,
ResourceTypes,
SinkArn
FROM aws.oam.links
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_link"
    values={[
        { label: 'create_link', value: 'create_link' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_link">

Creates a link between a source account and a sink that you have created in a monitoring account. After the link is created, data is sent from the source account to the monitoring account. When you create a link, you can optionally specify filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account. Before you create a link, you must create a sink in the monitoring account and create a sink policy in that account. The sink policy must permit the source account to link to it. You can grant permission to source accounts by granting permission to an entire organization or to individual accounts. For more information, see CreateSink and PutSinkPolicy. Each monitoring account can be linked to as many as 100,000 source accounts. Each source account can be linked to as many as five monitoring accounts.

```sql
INSERT INTO aws.oam.links (
LabelTemplate,
LinkConfiguration,
ResourceTypes,
SinkIdentifier,
Tags,
region
)
SELECT 
'{{ LabelTemplate }}' /* required */,
'{{ LinkConfiguration }}',
'{{ ResourceTypes }}' /* required */,
'{{ SinkIdentifier }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
Arn,
Id,
Label,
LabelTemplate,
LinkConfiguration,
ResourceTypes,
SinkArn,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: links
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the links resource.
    - name: LabelTemplate
      value: "{{ LabelTemplate }}"
    - name: LinkConfiguration
      description: |
        Use this structure to optionally create filters that specify that only some metric namespaces or log groups are to be shared from the source account to the monitoring account.
      value:
        LogGroupConfiguration:
          Filter: "{{ Filter }}"
        MetricConfiguration:
          Filter: "{{ Filter }}"
    - name: ResourceTypes
      value:
        - "{{ ResourceTypes }}"
    - name: SinkIdentifier
      value: "{{ SinkIdentifier }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_link"
    values={[
        { label: 'update_link', value: 'update_link' }
    ]}
>
<TabItem value="update_link">

Use this operation to change what types of data are shared from a source account to its linked monitoring account sink. You can't change the sink or change the monitoring account with this operation. When you update a link, you can optionally specify filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account. To update the list of tags associated with the sink, use TagResource.

```sql
UPDATE aws.oam.links
SET 
Identifier = '{{ Identifier }}',
IncludeTags = {{ IncludeTags }},
LinkConfiguration = '{{ LinkConfiguration }}',
ResourceTypes = '{{ ResourceTypes }}'
WHERE 
region = '{{ region }}' --required
AND Identifier = '{{ Identifier }}' --required
AND ResourceTypes = '{{ ResourceTypes }}' --required
RETURNING
Arn,
Id,
Label,
LabelTemplate,
LinkConfiguration,
ResourceTypes,
SinkArn,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_link"
    values={[
        { label: 'delete_link', value: 'delete_link' }
    ]}
>
<TabItem value="delete_link">

Deletes a link between a monitoring account sink and a source account. You must run this operation in the source account.

```sql
DELETE FROM aws.oam.links
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
