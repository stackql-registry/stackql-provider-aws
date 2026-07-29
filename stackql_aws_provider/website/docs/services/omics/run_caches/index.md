--- 
title: run_caches
hide_title: false
hide_table_of_contents: false
keywords:
  - run_caches
  - omics
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

Creates, updates, deletes, gets or lists a <code>run_caches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="run_caches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.run_caches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_run_cache"
    values={[
        { label: 'get_run_cache', value: 'get_run_cache' },
        { label: 'list_run_caches', value: 'list_run_caches' }
    ]}
>
<TabItem value="get_run_cache">

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
    <td>The run cache ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The run cache name. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Unique resource identifier for the run cache. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_behavior" /></td>
    <td><code>string</code></td>
    <td>The default cache behavior for runs using this cache. (CACHE_ON_FAILURE, CACHE_ALWAYS)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_bucket_owner_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the bucket owner. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_s3_uri" /></td>
    <td><code>string</code></td>
    <td>Uri to a S3 object or bucket (pattern: &lt;code&gt;s3:​//(&#91;a-z0-9&#93;&#91;a-z0-9-.&#93;&#123;1,61&#125;&#91;a-z0-9&#93;)(/(.&#123;0,1024&#125;))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the run cache (an ISO 8601 formatted string).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The run cache description. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The run cache status. (ACTIVE, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the run cache.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_run_caches">

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
    <td>The identifier for this run cache. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the run cache. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Unique resource identifier for the run cache. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_behavior" /></td>
    <td><code>string</code></td>
    <td>Default cache behavior for the run cache. (CACHE_ON_FAILURE, CACHE_ALWAYS)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_s3_uri" /></td>
    <td><code>string</code></td>
    <td>Uri to a S3 object or bucket (pattern: &lt;code&gt;s3:​//(&#91;a-z0-9&#93;&#91;a-z0-9-.&#93;&#123;1,61&#125;&#91;a-z0-9&#93;)(/(.&#123;0,1024&#125;))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that this run cache was created (an ISO 8601 formatted string).</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The run cache status. (ACTIVE, DELETED, FAILED)</td>
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
    <td><a href="#get_run_cache"><CopyableCode code="get_run_cache" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about the specified run cache using its ID. For more information, see Call caching for Amazon Web Services HealthOmics runs in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#list_run_caches"><CopyableCode code="list_run_caches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-startingToken"><code>startingToken</code></a></td>
    <td>Retrieves a list of your run caches and the metadata for each cache.</td>
</tr>
<tr>
    <td><a href="#create_run_cache"><CopyableCode code="create_run_cache" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cacheS3Location"><code>cacheS3Location</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td></td>
    <td>Creates a run cache to store and reference task outputs from completed private runs. Specify an Amazon S3 location where Amazon Web Services HealthOmics saves the cached data. This data must be immediately accessible and not in an archived state. You can save intermediate task files to a run cache if they are declared as task outputs in the workflow definition file. For more information, see Call caching and Creating a run cache in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#update_run_cache"><CopyableCode code="update_run_cache" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a run cache using its ID and returns a response with no body if the operation is successful. You can update the run cache description, name, or the default run cache behavior with CACHE_ON_FAILURE or CACHE_ALWAYS. To confirm that your run cache settings have been properly updated, use the GetRunCache API operation. For more information, see How call caching works in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_run_cache"><CopyableCode code="delete_run_cache" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a run cache and returns a response with no body if the operation is successful. This action removes the cache metadata stored in the service account, but does not delete the data in Amazon S3. You can access the cache data in Amazon S3, for inspection or to troubleshoot issues. You can remove old cache data using standard S3 Delete operations. For more information, see Deleting a run cache in the Amazon Web Services HealthOmics User Guide.</td>
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
    <td>Run cache identifier for the cache you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-startingToken">
    <td><CopyableCode code="startingToken" /></td>
    <td><code>string</code></td>
    <td>Optional pagination token returned from a prior call to the ListRunCaches API operation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_run_cache"
    values={[
        { label: 'get_run_cache', value: 'get_run_cache' },
        { label: 'list_run_caches', value: 'list_run_caches' }
    ]}
>
<TabItem value="get_run_cache">

Retrieves detailed information about the specified run cache using its ID. For more information, see Call caching for Amazon Web Services HealthOmics runs in the Amazon Web Services HealthOmics User Guide.

```sql
SELECT
id,
name,
arn,
cache_behavior,
cache_bucket_owner_id,
cache_s3_uri,
creation_time,
description,
status,
tags
FROM aws.omics.run_caches
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_run_caches">

Retrieves a list of your run caches and the metadata for each cache.

```sql
SELECT
id,
name,
arn,
cache_behavior,
cache_s3_uri,
creation_time,
status
FROM aws.omics.run_caches
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND startingToken = '{{ startingToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_run_cache"
    values={[
        { label: 'create_run_cache', value: 'create_run_cache' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_run_cache">

Creates a run cache to store and reference task outputs from completed private runs. Specify an Amazon S3 location where Amazon Web Services HealthOmics saves the cached data. This data must be immediately accessible and not in an archived state. You can save intermediate task files to a run cache if they are declared as task outputs in the workflow definition file. For more information, see Call caching and Creating a run cache in the Amazon Web Services HealthOmics User Guide.

```sql
INSERT INTO aws.omics.run_caches (
cacheBehavior,
cacheS3Location,
description,
name,
requestId,
tags,
cacheBucketOwnerId,
region
)
SELECT 
'{{ cacheBehavior }}',
'{{ cacheS3Location }}' /* required */,
'{{ description }}',
'{{ name }}',
'{{ requestId }}' /* required */,
'{{ tags }}',
'{{ cacheBucketOwnerId }}',
'{{ region }}'
RETURNING
id,
arn,
status,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: run_caches
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the run_caches resource.
    - name: cacheBehavior
      value: "{{ cacheBehavior }}"
      valid_values: ['CACHE_ON_FAILURE', 'CACHE_ALWAYS']
    - name: cacheS3Location
      value: "{{ cacheS3Location }}"
      description: |
        Uri to a S3 object or bucket
    - name: description
      value: "{{ description }}"
    - name: name
      value: "{{ name }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: tags
      value: "{{ tags }}"
    - name: cacheBucketOwnerId
      value: "{{ cacheBucketOwnerId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_run_cache"
    values={[
        { label: 'update_run_cache', value: 'update_run_cache' }
    ]}
>
<TabItem value="update_run_cache">

Updates a run cache using its ID and returns a response with no body if the operation is successful. You can update the run cache description, name, or the default run cache behavior with CACHE_ON_FAILURE or CACHE_ALWAYS. To confirm that your run cache settings have been properly updated, use the GetRunCache API operation. For more information, see How call caching works in the Amazon Web Services HealthOmics User Guide.

```sql
UPDATE aws.omics.run_caches
SET 
cacheBehavior = '{{ cacheBehavior }}',
description = '{{ description }}',
name = '{{ name }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_run_cache"
    values={[
        { label: 'delete_run_cache', value: 'delete_run_cache' }
    ]}
>
<TabItem value="delete_run_cache">

Deletes a run cache and returns a response with no body if the operation is successful. This action removes the cache metadata stored in the service account, but does not delete the data in Amazon S3. You can access the cache data in Amazon S3, for inspection or to troubleshoot issues. You can remove old cache data using standard S3 Delete operations. For more information, see Deleting a run cache in the Amazon Web Services HealthOmics User Guide.

```sql
DELETE FROM aws.omics.run_caches
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
