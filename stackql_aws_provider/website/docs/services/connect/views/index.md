--- 
title: views
hide_title: false
hide_table_of_contents: false
keywords:
  - views
  - connect
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

Creates, updates, deletes, gets or lists a <code>views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="views" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.views" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_view"
    values={[
        { label: 'describe_view', value: 'describe_view' },
        { label: 'list_views', value: 'list_views' },
        { label: 'search_views', value: 'search_views' }
    ]}
>
<TabItem value="describe_view">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the view.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>View content containing all content necessary to render a view except for runtime input data.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the view was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the view. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;N&#125;_.:\/=+\-@,()'&#93;+&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:\/=+\-@,()'&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the view. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_\-:\/$&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Latest timestamp of the UpdateViewContent or CreateViewVersion operations.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the view. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;N&#125;_.:\/=+\-@()'&#93;+&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:\/=+\-@()'&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Indicates the view status as either SAVED or PUBLISHED. The PUBLISHED status will initiate validation on the content. (PUBLISHED, SAVED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the view resource (not specific to view version).</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the view - CUSTOMER_MANAGED. (CUSTOMER_MANAGED, AWS_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>Current version of the view.</td>
</tr>
<tr>
    <td><CopyableCode code="version_description" /></td>
    <td><code>string</code></td>
    <td>The description of the version. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;N&#125;_.:\/=+\-@,()'&#93;+&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:\/=+\-@,()'&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="view_content_sha_256" /></td>
    <td><code>string</code></td>
    <td>Indicates the checksum value of the latest published view content. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_views">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the view.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the view. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;N&#125;_.:\/=+\-@,()'&#93;+&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:\/=+\-@,()'&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the view. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_\-:\/$&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the view. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;N&#125;_.:\/=+\-@()'&#93;+&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:\/=+\-@()'&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Indicates the view status as either SAVED or PUBLISHED. The PUBLISHED status will initiate validation on the content. (PUBLISHED, SAVED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the view. (CUSTOMER_MANAGED, AWS_MANAGED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_views">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the view.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>View content containing all content necessary to render a view except for runtime input data.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the view was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the view. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;N&#125;_.:\/=+\-@,()'&#93;+&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:\/=+\-@,()'&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the view. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_\-:\/$&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Latest timestamp of the UpdateViewContent or CreateViewVersion operations.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the view. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;N&#125;_.:\/=+\-@()'&#93;+&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:\/=+\-@()'&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Indicates the view status as either SAVED or PUBLISHED. The PUBLISHED status will initiate validation on the content. (PUBLISHED, SAVED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the view resource (not specific to view version).</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the view - CUSTOMER_MANAGED. (CUSTOMER_MANAGED, AWS_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>Current version of the view.</td>
</tr>
<tr>
    <td><CopyableCode code="version_description" /></td>
    <td><code>string</code></td>
    <td>The description of the version. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;N&#125;_.:\/=+\-@,()'&#93;+&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:\/=+\-@,()'&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="view_content_sha_256" /></td>
    <td><code>string</code></td>
    <td>Indicates the checksum value of the latest published view content. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_view"><CopyableCode code="describe_view" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-view_id"><code>view_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the view for the specified Connect Customer instance and view identifier. The view identifier can be supplied as a ViewId or ARN. $SAVED needs to be supplied if a view is unpublished. The view identifier can contain an optional qualifier, for example, <code>&lt;view-id&gt;</code>:$SAVED, which is either an actual version number or an Connect Customer managed qualifier $SAVED | $LATEST. If it is not supplied, then $LATEST is assumed for customer managed views and an error is returned if there is no published content available. Version 1 is assumed for Amazon Web Services managed views.</td>
</tr>
<tr>
    <td><a href="#list_views"><CopyableCode code="list_views" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns views in the given instance. Results are sorted primarily by type, and secondarily by name.</td>
</tr>
<tr>
    <td><a href="#search_views"><CopyableCode code="search_views" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches views based on name, description, or tags.</td>
</tr>
<tr>
    <td><a href="#create_view"><CopyableCode code="create_view" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new view with the possible status of SAVED or PUBLISHED. The views will have a unique name for each connect instance. It performs basic content validation if the status is SAVED or full content validation if the status is set to PUBLISHED. An error is returned if validation fails. It associates either the $SAVED qualifier or both of the $SAVED and $LATEST qualifiers with the provided view content based on the status. The view is idempotent if ClientToken is provided.</td>
</tr>
<tr>
    <td><a href="#update_view_content"><CopyableCode code="update_view_content" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-view_id"><code>view_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the view content of the given view identifier in the specified Connect Customer instance. It performs content validation if Status is set to SAVED and performs full content validation if Status is PUBLISHED. Note that the $SAVED alias' content will always be updated, but the $LATEST alias' content will only be updated if Status is PUBLISHED.</td>
</tr>
<tr>
    <td><a href="#delete_view"><CopyableCode code="delete_view" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-view_id"><code>view_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the view entirely. It deletes the view and all associated qualifiers (versions and aliases).</td>
</tr>
<tr>
    <td><a href="#update_view_metadata"><CopyableCode code="update_view_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-view_id"><code>view_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the view metadata. Note that either Name or Description must be provided.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instanceId in the ARN of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-view_id">
    <td><CopyableCode code="view_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the view. Both ViewArn and ViewId can be used.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. The default MaxResult size is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the view.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_view"
    values={[
        { label: 'describe_view', value: 'describe_view' },
        { label: 'list_views', value: 'list_views' },
        { label: 'search_views', value: 'search_views' }
    ]}
>
<TabItem value="describe_view">

Retrieves the view for the specified Connect Customer instance and view identifier. The view identifier can be supplied as a ViewId or ARN. $SAVED needs to be supplied if a view is unpublished. The view identifier can contain an optional qualifier, for example, <code>&lt;view-id&gt;</code>:$SAVED, which is either an actual version number or an Connect Customer managed qualifier $SAVED | $LATEST. If it is not supplied, then $LATEST is assumed for customer managed views and an error is returned if there is no published content available. Version 1 is assumed for Amazon Web Services managed views.

```sql
SELECT
arn,
content,
created_time,
description,
id,
last_modified_time,
name,
status,
tags,
type,
version,
version_description,
view_content_sha_256
FROM aws.connect.views
WHERE instance_id = '{{ instance_id }}' -- required
AND view_id = '{{ view_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_views">

Returns views in the given instance. Results are sorted primarily by type, and secondarily by name.

```sql
SELECT
arn,
description,
id,
name,
status,
type
FROM aws.connect.views
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND type = '{{ type }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_views">

Searches views based on name, description, or tags.

```sql
SELECT
arn,
content,
created_time,
description,
id,
last_modified_time,
name,
status,
tags,
type,
version,
version_description,
view_content_sha_256
FROM aws.connect.views
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_view"
    values={[
        { label: 'create_view', value: 'create_view' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_view">

Creates a new view with the possible status of SAVED or PUBLISHED. The views will have a unique name for each connect instance. It performs basic content validation if the status is SAVED or full content validation if the status is set to PUBLISHED. An error is returned if validation fails. It associates either the $SAVED qualifier or both of the $SAVED and $LATEST qualifiers with the provided view content based on the status. The view is idempotent if ClientToken is provided.

```sql
INSERT INTO aws.connect.views (
ClientToken,
Status,
Content,
Description,
Name,
Tags,
instance_id,
region
)
SELECT 
'{{ ClientToken }}',
'{{ Status }}',
'{{ Content }}',
'{{ Description }}',
'{{ Name }}',
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
view
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: views
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the views resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the views resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Status
      value: "{{ Status }}"
      valid_values: ['PUBLISHED', 'SAVED']
    - name: Content
      description: |
        View content containing all content necessary to render a view except for runtime input data and the runtime input schema, which is auto-generated by this operation.
      value:
        Template: "{{ Template }}"
        Actions:
          - "{{ Actions }}"
    - name: Description
      value: "{{ Description }}"
    - name: Name
      value: "{{ Name }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_view_content"
    values={[
        { label: 'update_view_content', value: 'update_view_content' }
    ]}
>
<TabItem value="update_view_content">

Updates the view content of the given view identifier in the specified Connect Customer instance. It performs content validation if Status is set to SAVED and performs full content validation if Status is PUBLISHED. Note that the $SAVED alias' content will always be updated, but the $LATEST alias' content will only be updated if Status is PUBLISHED.

```sql
UPDATE aws.connect.views
SET 
Status = '{{ Status }}',
Content = '{{ Content }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND view_id = '{{ view_id }}' --required
AND region = '{{ region }}' --required
RETURNING
view;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_view"
    values={[
        { label: 'delete_view', value: 'delete_view' }
    ]}
>
<TabItem value="delete_view">

Deletes the view entirely. It deletes the view and all associated qualifiers (versions and aliases).

```sql
DELETE FROM aws.connect.views
WHERE instance_id = '{{ instance_id }}' --required
AND view_id = '{{ view_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_view_metadata"
    values={[
        { label: 'update_view_metadata', value: 'update_view_metadata' }
    ]}
>
<TabItem value="update_view_metadata">

Updates the view metadata. Note that either Name or Description must be provided.

```sql
EXEC aws.connect.views.update_view_metadata 
@instance_id='{{ instance_id }}' --required, 
@view_id='{{ view_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"Description": "{{ Description }}"
}'
;
```
</TabItem>
</Tabs>
