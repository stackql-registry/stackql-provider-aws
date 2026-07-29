--- 
title: app_bundles
hide_title: false
hide_table_of_contents: false
keywords:
  - app_bundles
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

Creates, updates, deletes, gets or lists an <code>app_bundles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_bundles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appfabric.app_bundles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_app_bundle"
    values={[
        { label: 'get_app_bundle', value: 'get_app_bundle' },
        { label: 'list_app_bundles', value: 'list_app_bundles' }
    ]}
>
<TabItem value="get_app_bundle">

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
    <td>The Amazon Resource Name (ARN) of the app bundle. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_managed_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key used to encrypt the application data. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_app_bundles">

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
    <td>The Amazon Resource Name (ARN) of the app bundle. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
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
    <td><a href="#get_app_bundle"><CopyableCode code="get_app_bundle" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an app bundle.</td>
</tr>
<tr>
    <td><a href="#list_app_bundles"><CopyableCode code="list_app_bundles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of app bundles.</td>
</tr>
<tr>
    <td><a href="#create_app_bundle"><CopyableCode code="create_app_bundle" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an app bundle to collect data from an application using AppFabric.</td>
</tr>
<tr>
    <td><a href="#delete_app_bundle"><CopyableCode code="delete_app_bundle" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an app bundle. You must delete all associated app authorizations before you can delete an app bundle.</td>
</tr>
<tr>
    <td><a href="#start_ingestion"><CopyableCode code="start_ingestion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ingestion_identifier"><code>ingestion_identifier</code></a>, <a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts (enables) an ingestion, which collects data from an application.</td>
</tr>
<tr>
    <td><a href="#stop_ingestion"><CopyableCode code="stop_ingestion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ingestion_identifier"><code>ingestion_identifier</code></a>, <a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops (disables) an ingestion.</td>
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
    defaultValue="get_app_bundle"
    values={[
        { label: 'get_app_bundle', value: 'get_app_bundle' },
        { label: 'list_app_bundles', value: 'list_app_bundles' }
    ]}
>
<TabItem value="get_app_bundle">

Returns information about an app bundle.

```sql
SELECT
arn,
customer_managed_key_arn
FROM aws.appfabric.app_bundles
WHERE app_bundle_identifier = '{{ app_bundle_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_app_bundles">

Returns a list of app bundles.

```sql
SELECT
arn
FROM aws.appfabric.app_bundles
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app_bundle"
    values={[
        { label: 'create_app_bundle', value: 'create_app_bundle' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app_bundle">

Creates an app bundle to collect data from an application using AppFabric.

```sql
INSERT INTO aws.appfabric.app_bundles (
clientToken,
customerManagedKeyIdentifier,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ customerManagedKeyIdentifier }}',
'{{ tags }}',
'{{ region }}'
RETURNING
app_bundle
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: app_bundles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the app_bundles resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: customerManagedKeyIdentifier
      value: "{{ customerManagedKeyIdentifier }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app_bundle"
    values={[
        { label: 'delete_app_bundle', value: 'delete_app_bundle' }
    ]}
>
<TabItem value="delete_app_bundle">

Deletes an app bundle. You must delete all associated app authorizations before you can delete an app bundle.

```sql
DELETE FROM aws.appfabric.app_bundles
WHERE app_bundle_identifier = '{{ app_bundle_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_ingestion"
    values={[
        { label: 'start_ingestion', value: 'start_ingestion' },
        { label: 'stop_ingestion', value: 'stop_ingestion' }
    ]}
>
<TabItem value="start_ingestion">

Starts (enables) an ingestion, which collects data from an application.

```sql
EXEC aws.appfabric.app_bundles.start_ingestion 
@ingestion_identifier='{{ ingestion_identifier }}' --required, 
@app_bundle_identifier='{{ app_bundle_identifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_ingestion">

Stops (disables) an ingestion.

```sql
EXEC aws.appfabric.app_bundles.stop_ingestion 
@ingestion_identifier='{{ ingestion_identifier }}' --required, 
@app_bundle_identifier='{{ app_bundle_identifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
