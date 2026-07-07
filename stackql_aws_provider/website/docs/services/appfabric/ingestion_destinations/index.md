--- 
title: ingestion_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - ingestion_destinations
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

Creates, updates, deletes, gets or lists an <code>ingestion_destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ingestion_destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appfabric.ingestion_destinations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ingestion_destination"
    values={[
        { label: 'get_ingestion_destination', value: 'get_ingestion_destination' },
        { label: 'list_ingestion_destinations', value: 'list_ingestion_destinations' }
    ]}
>
<TabItem value="get_ingestion_destination">

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
    <td>The Amazon Resource Name (ARN) of the ingestion destination. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the ingestion destination was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationConfiguration" /></td>
    <td><code>object</code></td>
    <td>Contains information about the destination of ingested data.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ingestion. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="processingConfiguration" /></td>
    <td><code>object</code></td>
    <td>Contains information about how ingested data is processed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The state of the ingestion destination. The following states are possible: Active: The ingestion destination is active and is ready to be used. Failed: The ingestion destination has failed. If the ingestion destination is in this state, you should verify the ingestion destination configuration and try again. (Active, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status of the ingestion destination. Only present when the status of ingestion destination is Failed.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the ingestion destination was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ingestion_destinations">

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
    <td>The Amazon Resource Name (ARN) of the ingestion destination. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
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
    <td><a href="#get_ingestion_destination"><CopyableCode code="get_ingestion_destination" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-ingestion_identifier"><code>ingestion_identifier</code></a>, <a href="#parameter-ingestion_destination_identifier"><code>ingestion_destination_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an ingestion destination.</td>
</tr>
<tr>
    <td><a href="#list_ingestion_destinations"><CopyableCode code="list_ingestion_destinations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-ingestion_identifier"><code>ingestion_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all ingestion destinations configured for an ingestion.</td>
</tr>
<tr>
    <td><a href="#create_ingestion_destination"><CopyableCode code="create_ingestion_destination" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-ingestion_identifier"><code>ingestion_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-processingConfiguration"><code>processingConfiguration</code></a>, <a href="#parameter-destinationConfiguration"><code>destinationConfiguration</code></a></td>
    <td></td>
    <td>Creates an ingestion destination, which specifies how an application's ingested data is processed by Amazon Web Services AppFabric and where it's delivered.</td>
</tr>
<tr>
    <td><a href="#update_ingestion_destination"><CopyableCode code="update_ingestion_destination" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-ingestion_identifier"><code>ingestion_identifier</code></a>, <a href="#parameter-ingestion_destination_identifier"><code>ingestion_destination_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destinationConfiguration"><code>destinationConfiguration</code></a></td>
    <td></td>
    <td>Updates an ingestion destination, which specifies how an application's ingested data is processed by Amazon Web Services AppFabric and where it's delivered.</td>
</tr>
<tr>
    <td><a href="#delete_ingestion_destination"><CopyableCode code="delete_ingestion_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-ingestion_identifier"><code>ingestion_identifier</code></a>, <a href="#parameter-ingestion_destination_identifier"><code>ingestion_destination_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an ingestion destination. This deletes the association between an ingestion and it's destination. It doesn't delete previously ingested data or the storage destination, such as the Amazon S3 bucket where the data is delivered. If the ingestion destination is deleted while the associated ingestion is enabled, the ingestion will fail and is eventually disabled.</td>
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
<tr id="parameter-ingestion_destination_identifier">
    <td><CopyableCode code="ingestion_destination_identifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion destination to use for the request.</td>
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
    defaultValue="get_ingestion_destination"
    values={[
        { label: 'get_ingestion_destination', value: 'get_ingestion_destination' },
        { label: 'list_ingestion_destinations', value: 'list_ingestion_destinations' }
    ]}
>
<TabItem value="get_ingestion_destination">

Returns information about an ingestion destination.

```sql
SELECT
arn,
createdAt,
destinationConfiguration,
ingestionArn,
processingConfiguration,
status,
statusReason,
updatedAt
FROM aws.appfabric.ingestion_destinations
WHERE app_bundle_identifier = '{{ app_bundle_identifier }}' -- required
AND ingestion_identifier = '{{ ingestion_identifier }}' -- required
AND ingestion_destination_identifier = '{{ ingestion_destination_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ingestion_destinations">

Returns a list of all ingestion destinations configured for an ingestion.

```sql
SELECT
arn
FROM aws.appfabric.ingestion_destinations
WHERE app_bundle_identifier = '{{ app_bundle_identifier }}' -- required
AND ingestion_identifier = '{{ ingestion_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ingestion_destination"
    values={[
        { label: 'create_ingestion_destination', value: 'create_ingestion_destination' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ingestion_destination">

Creates an ingestion destination, which specifies how an application's ingested data is processed by Amazon Web Services AppFabric and where it's delivered.

```sql
INSERT INTO aws.appfabric.ingestion_destinations (
processingConfiguration,
destinationConfiguration,
clientToken,
tags,
app_bundle_identifier,
ingestion_identifier,
region
)
SELECT 
'{{ processingConfiguration }}' /* required */,
'{{ destinationConfiguration }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ app_bundle_identifier }}',
'{{ ingestion_identifier }}',
'{{ region }}'
RETURNING
ingestionDestination
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ingestion_destinations
  props:
    - name: app_bundle_identifier
      value: "{{ app_bundle_identifier }}"
      description: Required parameter for the ingestion_destinations resource.
    - name: ingestion_identifier
      value: "{{ ingestion_identifier }}"
      description: Required parameter for the ingestion_destinations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ingestion_destinations resource.
    - name: processingConfiguration
      description: |
        Contains information about how ingested data is processed.
      value:
        auditLog:
          schema: "{{ schema }}"
          format_: "{{ format_ }}"
    - name: destinationConfiguration
      description: |
        Contains information about the destination of ingested data.
      value:
        auditLog:
          destination:
            s3Bucket:
              bucketName: "{{ bucketName }}"
              prefix: "{{ prefix }}"
            firehoseStream:
              streamName: "{{ streamName }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ingestion_destination"
    values={[
        { label: 'update_ingestion_destination', value: 'update_ingestion_destination' }
    ]}
>
<TabItem value="update_ingestion_destination">

Updates an ingestion destination, which specifies how an application's ingested data is processed by Amazon Web Services AppFabric and where it's delivered.

```sql
UPDATE aws.appfabric.ingestion_destinations
SET 
destinationConfiguration = '{{ destinationConfiguration }}'
WHERE 
app_bundle_identifier = '{{ app_bundle_identifier }}' --required
AND ingestion_identifier = '{{ ingestion_identifier }}' --required
AND ingestion_destination_identifier = '{{ ingestion_destination_identifier }}' --required
AND region = '{{ region }}' --required
AND destinationConfiguration = '{{ destinationConfiguration }}' --required
RETURNING
ingestionDestination;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ingestion_destination"
    values={[
        { label: 'delete_ingestion_destination', value: 'delete_ingestion_destination' }
    ]}
>
<TabItem value="delete_ingestion_destination">

Deletes an ingestion destination. This deletes the association between an ingestion and it's destination. It doesn't delete previously ingested data or the storage destination, such as the Amazon S3 bucket where the data is delivered. If the ingestion destination is deleted while the associated ingestion is enabled, the ingestion will fail and is eventually disabled.

```sql
DELETE FROM aws.appfabric.ingestion_destinations
WHERE app_bundle_identifier = '{{ app_bundle_identifier }}' --required
AND ingestion_identifier = '{{ ingestion_identifier }}' --required
AND ingestion_destination_identifier = '{{ ingestion_destination_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
