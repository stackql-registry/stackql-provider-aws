--- 
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connector"
    values={[
        { label: 'get_connector', value: 'get_connector' },
        { label: 'list_connectors', value: 'list_connectors' }
    ]}
>
<TabItem value="get_connector">

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
    <td><CopyableCode code="connector_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the connector. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO 8601 UTC timestamp indicating when the connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The service principal that created the connector. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the connector. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enablement_status" /></td>
    <td><code>string</code></td>
    <td>The enablement status of a CSPM connector. Indicates the lifecycle state of the connector resource. (ENABLED, PENDING_ENABLEMENT, PENDING_UPDATE, PENDING_DELETION)</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>object</code></td>
    <td>The health status of the connector, including connectivity status and last check time.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO 8601 UTC timestamp indicating when the connector was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the connector. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_detail" /></td>
    <td><code>object</code></td>
    <td>The cloud provider configuration details for the connector.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connectors">

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
    <td><CopyableCode code="connectors" /></td>
    <td><code>array</code></td>
    <td>An array of connector summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token to use to request the next page of results. If there are no additional results, this value is null.</td>
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
    <td><a href="#get_connector"><CopyableCode code="get_connector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connector_id"><code>connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details for a CSPM connector based on the connector ID.</td>
</tr>
<tr>
    <td><a href="#list_connectors"><CopyableCode code="list_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-ProviderName"><code>ProviderName</code></a>, <a href="#parameter-ConnectorStatus"><code>ConnectorStatus</code></a>, <a href="#parameter-EnablementStatus"><code>EnablementStatus</code></a></td>
    <td>Lists the CSPM connectors and their metadata for the calling account.</td>
</tr>
<tr>
    <td><a href="#create_connector"><CopyableCode code="create_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Provider"><code>Provider</code></a></td>
    <td></td>
    <td>Creates a connector to a third-party cloud provider in Security Hub CSPM. A connector establishes a connection between Security Hub CSPM and a third-party cloud provider, enabling Security Hub CSPM to ingest security findings and resource data from the connected environment.</td>
</tr>
<tr>
    <td><a href="#update_connector"><CopyableCode code="update_connector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-connector_id"><code>connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a CSPM connector's configuration, such as the scope or regions for the connected cloud provider.</td>
</tr>
<tr>
    <td><a href="#delete_connector"><CopyableCode code="delete_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connector_id"><code>connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a CSPM connector. When you delete a connector, Security Hub CSPM stops ingesting findings and resource data from the connected cloud provider environment.</td>
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
<tr id="parameter-connector_id">
    <td><CopyableCode code="connector_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the connector to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ConnectorStatus">
    <td><CopyableCode code="ConnectorStatus" /></td>
    <td><code>string</code></td>
    <td>The connectivity status to filter connectors by.</td>
</tr>
<tr id="parameter-EnablementStatus">
    <td><CopyableCode code="EnablementStatus" /></td>
    <td><code>string</code></td>
    <td>The enablement status to filter connectors by.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token to request the next page of results.</td>
</tr>
<tr id="parameter-ProviderName">
    <td><CopyableCode code="ProviderName" /></td>
    <td><code>string</code></td>
    <td>The name of the cloud provider to filter connectors by.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_connector"
    values={[
        { label: 'get_connector', value: 'get_connector' },
        { label: 'list_connectors', value: 'list_connectors' }
    ]}
>
<TabItem value="get_connector">

Retrieves details for a CSPM connector based on the connector ID.

```sql
SELECT
connector_arn,
connector_id,
created_at,
created_by,
description,
enablement_status,
health,
last_updated_at,
name,
provider_detail
FROM aws.securityhub.connectors
WHERE connector_id = '{{ connector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_connectors">

Lists the CSPM connectors and their metadata for the calling account.

```sql
SELECT
connectors,
next_token
FROM aws.securityhub.connectors
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND ProviderName = '{{ ProviderName }}'
AND ConnectorStatus = '{{ ConnectorStatus }}'
AND EnablementStatus = '{{ EnablementStatus }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connector"
    values={[
        { label: 'create_connector', value: 'create_connector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connector">

Creates a connector to a third-party cloud provider in Security Hub CSPM. A connector establishes a connection between Security Hub CSPM and a third-party cloud provider, enabling Security Hub CSPM to ingest security findings and resource data from the connected environment.

```sql
INSERT INTO aws.securityhub.connectors (
Name,
Description,
Provider,
Tags,
ClientToken,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ Provider }}' /* required */,
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
connector_arn,
connector_id,
connector_status,
enablement_status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connectors resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: Provider
      description: |
        The cloud provider configuration for creating a connector. This is a union type that currently supports Azure.
      value:
        Azure:
          AWSConfigConnectorArn: "{{ AWSConfigConnectorArn }}"
          ScopeConfiguration:
            ScopeType: "{{ ScopeType }}"
            ScopeValues:
              - "{{ ScopeValues }}"
          AzureRegions:
            - "{{ AzureRegions }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connector"
    values={[
        { label: 'update_connector', value: 'update_connector' }
    ]}
>
<TabItem value="update_connector">

Updates a CSPM connector's configuration, such as the scope or regions for the connected cloud provider.

```sql
UPDATE aws.securityhub.connectors
SET 
Description = '{{ Description }}',
Provider = '{{ Provider }}'
WHERE 
connector_id = '{{ connector_id }}' --required
AND region = '{{ region }}' --required
RETURNING
connector_status,
enablement_status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connector"
    values={[
        { label: 'delete_connector', value: 'delete_connector' }
    ]}
>
<TabItem value="delete_connector">

Deletes a CSPM connector. When you delete a connector, Security Hub CSPM stops ingesting findings and resource data from the connected cloud provider environment.

```sql
DELETE FROM aws.securityhub.connectors
WHERE connector_id = '{{ connector_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
