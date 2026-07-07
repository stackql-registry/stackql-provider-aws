--- 
title: access_previews
hide_title: false
hide_table_of_contents: false
keywords:
  - access_previews
  - accessanalyzer
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

Creates, updates, deletes, gets or lists an <code>access_previews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_previews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.accessanalyzer.access_previews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_access_preview"
    values={[
        { label: 'get_access_preview', value: 'get_access_preview' },
        { label: 'list_access_previews', value: 'list_access_previews' }
    ]}
>
<TabItem value="get_access_preview">

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
    <td>The unique ID for the access preview. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analyzerArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the analyzer used to generate the access preview. (pattern: &lt;code&gt;&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:analyzer/.&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configurations" /></td>
    <td><code>object</code></td>
    <td>A map of resource ARNs for the proposed resource configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the access preview was created.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the access preview. Creating - The access preview creation is in progress. Completed - The access preview is complete. You can preview findings for external access to the resource. Failed - The access preview creation has failed. (COMPLETED, CREATING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>object</code></td>
    <td>Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a Failed status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_access_previews">

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
    <td>The unique ID for the access preview. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analyzerArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the analyzer used to generate the access preview. (pattern: &lt;code&gt;&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:analyzer/.&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the access preview was created.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the access preview. Creating - The access preview creation is in progress. Completed - The access preview is complete and previews the findings for external access to the resource. Failed - The access preview creation has failed. (COMPLETED, CREATING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>object</code></td>
    <td>Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a Failed status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration.</td>
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
    <td><a href="#get_access_preview"><CopyableCode code="get_access_preview" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-access_preview_id"><code>access_preview_id</code></a>, <a href="#parameter-analyzerArn"><code>analyzerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an access preview for the specified analyzer.</td>
</tr>
<tr>
    <td><a href="#list_access_previews"><CopyableCode code="list_access_previews" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-analyzerArn"><code>analyzerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of access previews for the specified analyzer.</td>
</tr>
<tr>
    <td><a href="#create_access_preview"><CopyableCode code="create_access_preview" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-analyzerArn"><code>analyzerArn</code></a>, <a href="#parameter-configurations"><code>configurations</code></a></td>
    <td></td>
    <td>Creates an access preview that allows you to preview IAM Access Analyzer findings for your resource before deploying resource permissions.</td>
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
<tr id="parameter-access_preview_id">
    <td><CopyableCode code="access_preview_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the access preview.</td>
</tr>
<tr id="parameter-analyzerArn">
    <td><CopyableCode code="analyzerArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the analyzer used to generate the access preview.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination of results returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_access_preview"
    values={[
        { label: 'get_access_preview', value: 'get_access_preview' },
        { label: 'list_access_previews', value: 'list_access_previews' }
    ]}
>
<TabItem value="get_access_preview">

Retrieves information about an access preview for the specified analyzer.

```sql
SELECT
id,
analyzerArn,
configurations,
createdAt,
status,
statusReason
FROM aws.accessanalyzer.access_previews
WHERE access_preview_id = '{{ access_preview_id }}' -- required
AND analyzerArn = '{{ analyzerArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_access_previews">

Retrieves a list of access previews for the specified analyzer.

```sql
SELECT
id,
analyzerArn,
createdAt,
status,
statusReason
FROM aws.accessanalyzer.access_previews
WHERE analyzerArn = '{{ analyzerArn }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access_preview"
    values={[
        { label: 'create_access_preview', value: 'create_access_preview' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access_preview">

Creates an access preview that allows you to preview IAM Access Analyzer findings for your resource before deploying resource permissions.

```sql
INSERT INTO aws.accessanalyzer.access_previews (
analyzerArn,
configurations,
clientToken,
region
)
SELECT 
'{{ analyzerArn }}' /* required */,
'{{ configurations }}' /* required */,
'{{ clientToken }}',
'{{ region }}'
RETURNING
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_previews
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_previews resource.
    - name: analyzerArn
      value: "{{ analyzerArn }}"
    - name: configurations
      value: "{{ configurations }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
