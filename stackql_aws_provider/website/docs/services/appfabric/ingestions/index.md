--- 
title: ingestions
hide_title: false
hide_table_of_contents: false
keywords:
  - ingestions
  - appfabric
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

Creates, updates, deletes, gets or lists an <code>ingestions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ingestions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appfabric.ingestions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ingestion"
    values={[
        { label: 'get_ingestion', value: 'get_ingestion' },
        { label: 'list_ingestions', value: 'list_ingestions' }
    ]}
>
<TabItem value="get_ingestion">

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
    <td><CopyableCode code="app" /></td>
    <td><code>string</code></td>
    <td>The name of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="appBundleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the app bundle for the ingestion. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ingestion. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the ingestion was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestionType" /></td>
    <td><code>string</code></td>
    <td>The type of the ingestion. (auditLog)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The status of the ingestion. (enabled, disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="tenantId" /></td>
    <td><code>string</code></td>
    <td>The ID of the application tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the ingestion was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ingestions">

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
    <td><CopyableCode code="app" /></td>
    <td><code>string</code></td>
    <td>The name of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ingestion. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The status of the ingestion. (enabled, disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="tenantId" /></td>
    <td><code>string</code></td>
    <td>The ID of the application tenant.</td>
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
    <td><a href="#get_ingestion"><CopyableCode code="get_ingestion" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-ingestion_identifier"><code>ingestion_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an ingestion.</td>
</tr>
<tr>
    <td><a href="#list_ingestions"><CopyableCode code="list_ingestions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all ingestions configured for an app bundle.</td>
</tr>
<tr>
    <td><a href="#create_ingestion"><CopyableCode code="create_ingestion" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-app"><code>app</code></a>, <a href="#parameter-tenantId"><code>tenantId</code></a>, <a href="#parameter-ingestionType"><code>ingestionType</code></a></td>
    <td></td>
    <td>Creates a data ingestion for an application.</td>
</tr>
<tr>
    <td><a href="#delete_ingestion"><CopyableCode code="delete_ingestion" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-ingestion_identifier"><code>ingestion_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an ingestion. You must stop (disable) the ingestion and you must delete all associated ingestion destinations before you can delete an app ingestion.</td>
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
<tr id="parameter-app_bundle_identifier">
    <td><CopyableCode code="app_bundle_identifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.</td>
</tr>
<tr id="parameter-ingestion_identifier">
    <td><CopyableCode code="ingestion_identifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ingestion"
    values={[
        { label: 'get_ingestion', value: 'get_ingestion' },
        { label: 'list_ingestions', value: 'list_ingestions' }
    ]}
>
<TabItem value="get_ingestion">

Returns information about an ingestion.

```sql
SELECT
app,
appBundleArn,
arn,
createdAt,
ingestionType,
state,
tenantId,
updatedAt
FROM aws.appfabric.ingestions
WHERE app_bundle_identifier = '{{ app_bundle_identifier }}' -- required
AND ingestion_identifier = '{{ ingestion_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ingestions">

Returns a list of all ingestions configured for an app bundle.

```sql
SELECT
app,
arn,
state,
tenantId
FROM aws.appfabric.ingestions
WHERE app_bundle_identifier = '{{ app_bundle_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ingestion"
    values={[
        { label: 'create_ingestion', value: 'create_ingestion' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ingestion">

Creates a data ingestion for an application.

```sql
INSERT INTO aws.appfabric.ingestions (
app,
tenantId,
ingestionType,
clientToken,
tags,
app_bundle_identifier,
region
)
SELECT 
'{{ app }}' /* required */,
'{{ tenantId }}' /* required */,
'{{ ingestionType }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ app_bundle_identifier }}',
'{{ region }}'
RETURNING
ingestion
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ingestions
  props:
    - name: app_bundle_identifier
      value: "{{ app_bundle_identifier }}"
      description: Required parameter for the ingestions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ingestions resource.
    - name: app
      value: "{{ app }}"
    - name: tenantId
      value: "{{ tenantId }}"
    - name: ingestionType
      value: "{{ ingestionType }}"
      valid_values: ['auditLog']
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ingestion"
    values={[
        { label: 'delete_ingestion', value: 'delete_ingestion' }
    ]}
>
<TabItem value="delete_ingestion">

Deletes an ingestion. You must stop (disable) the ingestion and you must delete all associated ingestion destinations before you can delete an app ingestion.

```sql
DELETE FROM aws.appfabric.ingestions
WHERE app_bundle_identifier = '{{ app_bundle_identifier }}' --required
AND ingestion_identifier = '{{ ingestion_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
