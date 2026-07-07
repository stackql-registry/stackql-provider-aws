--- 
title: feeds
hide_title: false
hide_table_of_contents: false
keywords:
  - feeds
  - elementalinference
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

Creates, updates, deletes, gets or lists a <code>feeds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="feeds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elementalinference.feeds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_feed"
    values={[
        { label: 'get_feed', value: 'get_feed' },
        { label: 'list_feeds', value: 'list_feeds' }
    ]}
>
<TabItem value="get_feed">

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
    <td>The ID of the feed being queried. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;19&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the feed being queried. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;a-zA-Z0-9-_&#93;&#123;0,126&#125;&#91;a-zA-Z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the feed.</td>
</tr>
<tr>
    <td><CopyableCode code="association" /></td>
    <td><code>object</code></td>
    <td>Information about the resource, if any, associated with the feed being queried.</td>
</tr>
<tr>
    <td><CopyableCode code="dataEndpoints" /></td>
    <td><code>array</code></td>
    <td>The dataEndpoints of the feed being queried.</td>
</tr>
<tr>
    <td><CopyableCode code="outputs" /></td>
    <td><code>array</code></td>
    <td>An array of the outputs in the feed being queried.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the feed being queried. (CREATING, AVAILABLE, ACTIVE, UPDATING, DELETING, DELETED, ARCHIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A list of the tags, if any, for the feed being queried.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_feeds">

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
    <td>The ID of the feed. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;19&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the feed (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;a-zA-Z0-9-_&#93;&#123;0,126&#125;&#91;a-zA-Z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the feed.</td>
</tr>
<tr>
    <td><CopyableCode code="association" /></td>
    <td><code>object</code></td>
    <td>The resource, if any, associated with the feed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the feed. (CREATING, AVAILABLE, ACTIVE, UPDATING, DELETING, DELETED, ARCHIVED)</td>
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
    <td><a href="#get_feed"><CopyableCode code="get_feed" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified feed.</td>
</tr>
<tr>
    <td><a href="#list_feeds"><CopyableCode code="list_feeds" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Displays a list of feeds that belong to this AWS account.</td>
</tr>
<tr>
    <td><a href="#create_feed"><CopyableCode code="create_feed" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-outputs"><code>outputs</code></a></td>
    <td></td>
    <td>Creates a feed. The feed is the target for live streams being sent by the calling application. An example of a calling application is AWS Elemental MediaLive. After you create the feed, you can associate a resource with the feed.</td>
</tr>
<tr>
    <td><a href="#associate_feed"><CopyableCode code="associate_feed" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-associatedResourceName"><code>associatedResourceName</code></a>, <a href="#parameter-outputs"><code>outputs</code></a></td>
    <td></td>
    <td>Associates a resource with the feed. The resource provides the input that Elemental Inference needs needs in order to perform an Elemental Inference feature, such as cropping video. You always provide the resource by associating it with a feed. You can associate only one resource with each feed.</td>
</tr>
<tr>
    <td><a href="#update_feed"><CopyableCode code="update_feed" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-outputs"><code>outputs</code></a></td>
    <td></td>
    <td>Updates the name and/or outputs in a feed.</td>
</tr>
<tr>
    <td><a href="#disassociate_feed"><CopyableCode code="disassociate_feed" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-associatedResourceName"><code>associatedResourceName</code></a></td>
    <td></td>
    <td>Releases the resource (for example, an MediaLive channel) that is associated with this feed. The outputs in the feed become disabled.</td>
</tr>
<tr>
    <td><a href="#delete_feed"><CopyableCode code="delete_feed" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified feed. The feed can be deleted at any time.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the feed.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per API request. For example, you submit a list request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page. Valid Range: Minimum value of 1. Maximum value of 1000.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies the batch of results that you want to see. For example, you submit a ListBridges request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListBridges request a second time and specify the NextToken value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_feed"
    values={[
        { label: 'get_feed', value: 'get_feed' },
        { label: 'list_feeds', value: 'list_feeds' }
    ]}
>
<TabItem value="get_feed">

Retrieves information about the specified feed.

```sql
SELECT
id,
name,
arn,
association,
dataEndpoints,
outputs,
status,
tags
FROM aws.elementalinference.feeds
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_feeds">

Displays a list of feeds that belong to this AWS account.

```sql
SELECT
id,
name,
arn,
association,
status
FROM aws.elementalinference.feeds
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_feed"
    values={[
        { label: 'create_feed', value: 'create_feed' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_feed">

Creates a feed. The feed is the target for live streams being sent by the calling application. An example of a calling application is AWS Elemental MediaLive. After you create the feed, you can associate a resource with the feed.

```sql
INSERT INTO aws.elementalinference.feeds (
name,
outputs,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ outputs }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
arn,
association,
dataEndpoints,
outputs,
status,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: feeds
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the feeds resource.
    - name: name
      value: "{{ name }}"
    - name: outputs
      value:
        - name: "{{ name }}"
          outputConfig:
            cropping: "{{ cropping }}"
            clipping:
              callbackMetadata: "{{ callbackMetadata }}"
          status: "{{ status }}"
          description: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_feed"
    values={[
        { label: 'associate_feed', value: 'associate_feed' },
        { label: 'update_feed', value: 'update_feed' },
        { label: 'disassociate_feed', value: 'disassociate_feed' }
    ]}
>
<TabItem value="associate_feed">

Associates a resource with the feed. The resource provides the input that Elemental Inference needs needs in order to perform an Elemental Inference feature, such as cropping video. You always provide the resource by associating it with a feed. You can associate only one resource with each feed.

```sql
UPDATE aws.elementalinference.feeds
SET 
associatedResourceName = '{{ associatedResourceName }}',
outputs = '{{ outputs }}',
dryRun = {{ dryRun }}
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND associatedResourceName = '{{ associatedResourceName }}' --required
AND outputs = '{{ outputs }}' --required
RETURNING
id,
arn;
```
</TabItem>
<TabItem value="update_feed">

Updates the name and/or outputs in a feed.

```sql
UPDATE aws.elementalinference.feeds
SET 
name = '{{ name }}',
outputs = '{{ outputs }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND outputs = '{{ outputs }}' --required
RETURNING
id,
name,
arn,
association,
dataEndpoints,
outputs,
status,
tags;
```
</TabItem>
<TabItem value="disassociate_feed">

Releases the resource (for example, an MediaLive channel) that is associated with this feed. The outputs in the feed become disabled.

```sql
UPDATE aws.elementalinference.feeds
SET 
associatedResourceName = '{{ associatedResourceName }}',
dryRun = {{ dryRun }}
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND associatedResourceName = '{{ associatedResourceName }}' --required
RETURNING
id,
arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_feed"
    values={[
        { label: 'delete_feed', value: 'delete_feed' }
    ]}
>
<TabItem value="delete_feed">

Deletes the specified feed. The feed can be deleted at any time.

```sql
DELETE FROM aws.elementalinference.feeds
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
