--- 
title: collaboration_id_namespace_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - collaboration_id_namespace_associations
  - cleanrooms
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

Creates, updates, deletes, gets or lists a <code>collaboration_id_namespace_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="collaboration_id_namespace_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.collaboration_id_namespace_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_collaboration_id_namespace_association"
    values={[
        { label: 'get_collaboration_id_namespace_association', value: 'get_collaboration_id_namespace_association' },
        { label: 'list_collaboration_id_namespace_associations', value: 'list_collaboration_id_namespace_associations' }
    ]}
>
<TabItem value="get_collaboration_id_namespace_association">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration ID namespace association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the collaboration ID namespace association. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the collaboration ID namespace association. (pattern: &lt;code&gt;arn:aws:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+/idnamespaceassociation/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the collaboration that contains the collaboration ID namespace association. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration that contains the collaboration ID namespace association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the collaboration ID namespace association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorAccountId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Web Services account that created the collaboration ID namespace association. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the collaboration ID namespace association. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="idMappingConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration settings for the ID mapping table.</td>
</tr>
<tr>
    <td><CopyableCode code="inputReferenceConfig" /></td>
    <td><code>object</code></td>
    <td>Provides the information for the ID namespace association input reference configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="inputReferenceProperties" /></td>
    <td><code>object</code></td>
    <td>The input reference properties that are needed to create the collaboration ID namespace association.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the collaboration ID namespace was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_collaboration_id_namespace_associations">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration ID namespace association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the collaboration ID namespace association. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the collaboration ID namespace association. (pattern: &lt;code&gt;arn:aws:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+/idnamespaceassociation/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the collaboration that contains this collaboration ID namespace association. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration that contains this collaboration ID namespace association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the collaboration ID namespace association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account that created this collaboration ID namespace association. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the collaboration ID namepsace association. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inputReferenceConfig" /></td>
    <td><code>object</code></td>
    <td>Provides the information for the ID namespace association input reference configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="inputReferenceProperties" /></td>
    <td><code>object</code></td>
    <td>The input reference properties that are used to create the collaboration ID namespace association.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the collaboration ID namespace association was updated.</td>
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
    <td><a href="#get_collaboration_id_namespace_association"><CopyableCode code="get_collaboration_id_namespace_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-id_namespace_association_identifier"><code>id_namespace_association_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an ID namespace association from a specific collaboration.</td>
</tr>
<tr>
    <td><a href="#list_collaboration_id_namespace_associations"><CopyableCode code="list_collaboration_id_namespace_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of the ID namespace associations in a collaboration.</td>
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
<tr id="parameter-collaboration_identifier">
    <td><CopyableCode code="collaboration_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration that contains the ID namespace associations that you want to retrieve.</td>
</tr>
<tr id="parameter-id_namespace_association_identifier">
    <td><CopyableCode code="id_namespace_association_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ID namespace association that you want to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum size of the results that is returned per call. Service chooses a default if it has not been set. Service may return a nextToken even if the maximum results has not been met.&gt;</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_collaboration_id_namespace_association"
    values={[
        { label: 'get_collaboration_id_namespace_association', value: 'get_collaboration_id_namespace_association' },
        { label: 'list_collaboration_id_namespace_associations', value: 'list_collaboration_id_namespace_associations' }
    ]}
>
<TabItem value="get_collaboration_id_namespace_association">

Retrieves an ID namespace association from a specific collaboration.

```sql
SELECT
id,
name,
arn,
collaborationArn,
collaborationId,
createTime,
creatorAccountId,
description,
idMappingConfig,
inputReferenceConfig,
inputReferenceProperties,
updateTime
FROM aws.cleanrooms.collaboration_id_namespace_associations
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND id_namespace_association_identifier = '{{ id_namespace_association_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_collaboration_id_namespace_associations">

Returns a list of the ID namespace associations in a collaboration.

```sql
SELECT
id,
name,
arn,
collaborationArn,
collaborationId,
createTime,
creatorAccountId,
description,
inputReferenceConfig,
inputReferenceProperties,
updateTime
FROM aws.cleanrooms.collaboration_id_namespace_associations
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
