--- 
title: view_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - view_versions
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

Creates, updates, deletes, gets or lists a <code>view_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="view_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.view_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_view_versions"
    values={[
        { label: 'list_view_versions', value: 'list_view_versions' }
    ]}
>
<TabItem value="list_view_versions">

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
    <td>The Amazon Resource Name (ARN) of the view version.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the view version. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;N&#125;_.:\/=+\-@,()'&#93;+&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:\/=+\-@,()'&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the view version. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_\-:\/$&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the view version. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;N&#125;_.:\/=+\-@()'&#93;+&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:\/=+\-@()'&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of the view version. (CUSTOMER_MANAGED, AWS_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer</code></td>
    <td>The sequentially incremented version of the view version.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the view version. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;N&#125;_.:\/=+\-@,()'&#93;+&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:\/=+\-@,()'&#93;*)$&lt;/code&gt;)</td>
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
    <td><a href="#list_view_versions"><CopyableCode code="list_view_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-view_id"><code>view_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns all the available versions for the specified Amazon Connect instance and view identifier. Results will be sorted from highest to lowest.</td>
</tr>
<tr>
    <td><a href="#create_view_version"><CopyableCode code="create_view_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-view_id"><code>view_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Publishes a new version of the view identifier. Versions are immutable and monotonically increasing. It returns the highest version if there is no change in content compared to that version. An error is displayed if the supplied ViewContentSha256 is different from the ViewContentSha256 of the $LATEST alias.</td>
</tr>
<tr>
    <td><a href="#delete_view_version"><CopyableCode code="delete_view_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-view_id"><code>view_id</code></a>, <a href="#parameter-view_version"><code>view_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the particular version specified in ViewVersion identifier.</td>
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
    <td>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</td>
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
<tr id="parameter-view_version">
    <td><CopyableCode code="view_version" /></td>
    <td><code>integer</code></td>
    <td>The version number of the view.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_view_versions"
    values={[
        { label: 'list_view_versions', value: 'list_view_versions' }
    ]}
>
<TabItem value="list_view_versions">

Returns all the available versions for the specified Amazon Connect instance and view identifier. Results will be sorted from highest to lowest.

```sql
SELECT
Arn,
Description,
Id,
Name,
Type,
Version,
VersionDescription
FROM aws.connect.view_versions
WHERE instance_id = '{{ instance_id }}' -- required
AND view_id = '{{ view_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_view_version"
    values={[
        { label: 'create_view_version', value: 'create_view_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_view_version">

Publishes a new version of the view identifier. Versions are immutable and monotonically increasing. It returns the highest version if there is no change in content compared to that version. An error is displayed if the supplied ViewContentSha256 is different from the ViewContentSha256 of the $LATEST alias.

```sql
INSERT INTO aws.connect.view_versions (
VersionDescription,
ViewContentSha256,
instance_id,
view_id,
region
)
SELECT 
'{{ VersionDescription }}',
'{{ ViewContentSha256 }}',
'{{ instance_id }}',
'{{ view_id }}',
'{{ region }}'
RETURNING
View
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: view_versions
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the view_versions resource.
    - name: view_id
      value: "{{ view_id }}"
      description: Required parameter for the view_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the view_versions resource.
    - name: VersionDescription
      value: "{{ VersionDescription }}"
    - name: ViewContentSha256
      value: "{{ ViewContentSha256 }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_view_version"
    values={[
        { label: 'delete_view_version', value: 'delete_view_version' }
    ]}
>
<TabItem value="delete_view_version">

Deletes the particular version specified in ViewVersion identifier.

```sql
DELETE FROM aws.connect.view_versions
WHERE instance_id = '{{ instance_id }}' --required
AND view_id = '{{ view_id }}' --required
AND view_version = '{{ view_version }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
