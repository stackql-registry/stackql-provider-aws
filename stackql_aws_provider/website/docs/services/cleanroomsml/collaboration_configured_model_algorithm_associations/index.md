--- 
title: collaboration_configured_model_algorithm_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - collaboration_configured_model_algorithm_associations
  - cleanroomsml
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

Creates, updates, deletes, gets or lists a <code>collaboration_configured_model_algorithm_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="collaboration_configured_model_algorithm_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.collaboration_configured_model_algorithm_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_collaboration_configured_model_algorithm_association"
    values={[
        { label: 'get_collaboration_configured_model_algorithm_association', value: 'get_collaboration_configured_model_algorithm_association' },
        { label: 'list_collaboration_configured_model_algorithm_associations', value: 'list_collaboration_configured_model_algorithm_associations' }
    ]}
>
<TabItem value="get_collaboration_configured_model_algorithm_association">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the configured model algorithm association. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the configured model algorithm association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredModelAlgorithmArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm association. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:configured-model-algorithm/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredModelAlgorithmAssociationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm association. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/configured-model-algorithm-association/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configured model algorithm association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorAccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID of the member that created the configured model algorithm association. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configured model algorithm association. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipIdentifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the member that created the configured model algorithm association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="privacyConfiguration" /></td>
    <td><code>object</code></td>
    <td>Information about the privacy configuration for a configured model algorithm association.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the configured model algorithm association was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_collaboration_configured_model_algorithm_associations">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the configured model algorithm association. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The collaboration ID of the collaboration that contains the configured model algorithm association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredModelAlgorithmArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm that is associated to the collaboration. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:configured-model-algorithm/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredModelAlgorithmAssociationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm association. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:membership/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;/configured-model-algorithm-association/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configured model algorithm association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorAccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID of the member that created the configured model algorithm association. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configured model algorithm association. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipIdentifier" /></td>
    <td><code>string</code></td>
    <td>The membership ID of the member that created the configured model algorithm association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the configured model algorithm association was updated.</td>
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
    <td><a href="#get_collaboration_configured_model_algorithm_association"><CopyableCode code="get_collaboration_configured_model_algorithm_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configured_model_algorithm_association_arn"><code>configured_model_algorithm_association_arn</code></a>, <a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the configured model algorithm association in a collaboration.</td>
</tr>
<tr>
    <td><a href="#list_collaboration_configured_model_algorithm_associations"><CopyableCode code="list_collaboration_configured_model_algorithm_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of the configured model algorithm associations in a collaboration.</td>
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
    <td>The collaboration ID of the collaboration that contains the configured model algorithm associations that you are interested in.</td>
</tr>
<tr id="parameter-configured_model_algorithm_association_arn">
    <td><CopyableCode code="configured_model_algorithm_association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured model algorithm association that you want to return information about.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum size of the results that is returned per call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token value retrieved from a previous call to access the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_collaboration_configured_model_algorithm_association"
    values={[
        { label: 'get_collaboration_configured_model_algorithm_association', value: 'get_collaboration_configured_model_algorithm_association' },
        { label: 'list_collaboration_configured_model_algorithm_associations', value: 'list_collaboration_configured_model_algorithm_associations' }
    ]}
>
<TabItem value="get_collaboration_configured_model_algorithm_association">

Returns information about the configured model algorithm association in a collaboration.

```sql
SELECT
name,
collaborationIdentifier,
configuredModelAlgorithmArn,
configuredModelAlgorithmAssociationArn,
createTime,
creatorAccountId,
description,
membershipIdentifier,
privacyConfiguration,
updateTime
FROM aws.cleanroomsml.collaboration_configured_model_algorithm_associations
WHERE configured_model_algorithm_association_arn = '{{ configured_model_algorithm_association_arn }}' -- required
AND collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_collaboration_configured_model_algorithm_associations">

Returns a list of the configured model algorithm associations in a collaboration.

```sql
SELECT
name,
collaborationIdentifier,
configuredModelAlgorithmArn,
configuredModelAlgorithmAssociationArn,
createTime,
creatorAccountId,
description,
membershipIdentifier,
updateTime
FROM aws.cleanroomsml.collaboration_configured_model_algorithm_associations
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
