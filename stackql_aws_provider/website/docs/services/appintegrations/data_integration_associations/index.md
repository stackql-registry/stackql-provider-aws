--- 
title: data_integration_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - data_integration_associations
  - appintegrations
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

Creates, updates, deletes, gets or lists a <code>data_integration_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_integration_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appintegrations.data_integration_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_data_integration_associations"
    values={[
        { label: 'list_data_integration_associations', value: 'list_data_integration_associations' }
    ]}
>
<TabItem value="list_data_integration_associations">

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
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the client that is associated with the DataIntegration association. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="data_integration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the DataIntegration. (pattern: &lt;code&gt;^arn:aws:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="data_integration_association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the DataIntegration association. (pattern: &lt;code&gt;^arn:aws:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_uri" /></td>
    <td><code>string</code></td>
    <td>The URI of the data destination. (pattern: &lt;code&gt;^(\w+\:\/\/&#91;\w.-&#93;+&#91;\w/!@#+=.-&#93;+$)|(\w+\:\/\/&#91;\w.-&#93;+&#91;\w/!@#+=.-&#93;+&#91;\w/!@#+=.-&#93;+&#91;\w/!@#+=.,-&#93;+$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for how the files should be pulled from the source.</td>
</tr>
<tr>
    <td><CopyableCode code="last_execution_status" /></td>
    <td><code>object</code></td>
    <td>The execution status of the last job.</td>
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
    <td><a href="#list_data_integration_associations"><CopyableCode code="list_data_integration_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a paginated list of DataIntegration associations in the account. You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the CreateDataIntegration API.</td>
</tr>
<tr>
    <td><a href="#create_data_integration_association"><CopyableCode code="create_data_integration_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates and persists a DataIntegrationAssociation resource.</td>
</tr>
<tr>
    <td><a href="#update_data_integration_association"><CopyableCode code="update_data_integration_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-data_integration_association_identifier"><code>data_integration_association_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExecutionConfiguration"><code>ExecutionConfiguration</code></a></td>
    <td></td>
    <td>Updates and persists a DataIntegrationAssociation resource. Updating a DataIntegrationAssociation with ExecutionConfiguration will rerun the on-demand job.</td>
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
<tr id="parameter-data_integration_association_identifier">
    <td><CopyableCode code="data_integration_association_identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier. of the DataIntegrationAssociation resource</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the DataIntegration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
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
    defaultValue="list_data_integration_associations"
    values={[
        { label: 'list_data_integration_associations', value: 'list_data_integration_associations' }
    ]}
>
<TabItem value="list_data_integration_associations">

Returns a paginated list of DataIntegration associations in the account. You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the CreateDataIntegration API.

```sql
SELECT
client_id,
data_integration_arn,
data_integration_association_arn,
destination_uri,
execution_configuration,
last_execution_status
FROM aws.appintegrations.data_integration_associations
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_integration_association"
    values={[
        { label: 'create_data_integration_association', value: 'create_data_integration_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_integration_association">

Creates and persists a DataIntegrationAssociation resource.

```sql
INSERT INTO aws.appintegrations.data_integration_associations (
ClientId,
ObjectConfiguration,
DestinationURI,
ClientAssociationMetadata,
ClientToken,
ExecutionConfiguration,
identifier,
region
)
SELECT 
'{{ ClientId }}',
'{{ ObjectConfiguration }}',
'{{ DestinationURI }}',
'{{ ClientAssociationMetadata }}',
'{{ ClientToken }}',
'{{ ExecutionConfiguration }}',
'{{ identifier }}',
'{{ region }}'
RETURNING
data_integration_arn,
data_integration_association_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_integration_associations
  props:
    - name: identifier
      value: "{{ identifier }}"
      description: Required parameter for the data_integration_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_integration_associations resource.
    - name: ClientId
      value: "{{ ClientId }}"
    - name: ObjectConfiguration
      value: "{{ ObjectConfiguration }}"
      description: |
        The configuration for what data should be pulled from the source.
    - name: DestinationURI
      value: "{{ DestinationURI }}"
    - name: ClientAssociationMetadata
      value: "{{ ClientAssociationMetadata }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: ExecutionConfiguration
      description: |
        The configuration for how the files should be pulled from the source.
      value:
        ExecutionMode: "{{ ExecutionMode }}"
        OnDemandConfiguration:
          StartTime: "{{ StartTime }}"
          EndTime: "{{ EndTime }}"
        ScheduleConfiguration:
          FirstExecutionFrom: "{{ FirstExecutionFrom }}"
          Object: "{{ Object }}"
          ScheduleExpression: "{{ ScheduleExpression }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_integration_association"
    values={[
        { label: 'update_data_integration_association', value: 'update_data_integration_association' }
    ]}
>
<TabItem value="update_data_integration_association">

Updates and persists a DataIntegrationAssociation resource. Updating a DataIntegrationAssociation with ExecutionConfiguration will rerun the on-demand job.

```sql
UPDATE aws.appintegrations.data_integration_associations
SET 
ExecutionConfiguration = '{{ ExecutionConfiguration }}'
WHERE 
identifier = '{{ identifier }}' --required
AND data_integration_association_identifier = '{{ data_integration_association_identifier }}' --required
AND region = '{{ region }}' --required
AND ExecutionConfiguration = '{{ ExecutionConfiguration }}' --required;
```
</TabItem>
</Tabs>
