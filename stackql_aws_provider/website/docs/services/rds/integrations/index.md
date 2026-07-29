--- 
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
  - rds
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

Creates, updates, deletes, gets or lists an <code>integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_integrations"
    values={[
        { label: 'describe_integrations', value: 'describe_integrations' }
    ]}
>
<TabItem value="describe_integrations">

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
    <td><CopyableCode code="additional_encryption_context" /></td>
    <td><code>string</code></td>
    <td>The encryption context for the integration. For more information, see Encryption context in the Amazon Web Services Key Management Service Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string</code></td>
    <td>The time when the integration was created, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="data_filter" /></td>
    <td><code>string</code></td>
    <td>Data filters for the integration. These filters determine which tables from the source database are sent to the target Amazon Redshift data warehouse.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>string</code></td>
    <td>Any errors associated with the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="integration_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="integration_name" /></td>
    <td><code>string</code></td>
    <td>The name of the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key used to to encrypt the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="source_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the database used as the source for replication.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags. For more information, see Tagging Amazon RDS resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS resources in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="target_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Redshift data warehouse used as the target for replication.</td>
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
    <td><a href="#describe_integrations"><CopyableCode code="describe_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-IntegrationIdentifier"><code>IntegrationIdentifier</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Describe one or more zero-ETL integrations with Amazon Redshift.</td>
</tr>
<tr>
    <td><a href="#create_integration"><CopyableCode code="create_integration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-SourceArn"><code>SourceArn</code></a>, <a href="#parameter-TargetArn"><code>TargetArn</code></a>, <a href="#parameter-IntegrationName"><code>IntegrationName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-KMSKeyId"><code>KMSKeyId</code></a>, <a href="#parameter-AdditionalEncryptionContext"><code>AdditionalEncryptionContext</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-DataFilter"><code>DataFilter</code></a>, <a href="#parameter-Description"><code>Description</code></a></td>
    <td>Creates a zero-ETL integration with Amazon Redshift.</td>
</tr>
<tr>
    <td><a href="#modify_integration"><CopyableCode code="modify_integration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IntegrationIdentifier"><code>IntegrationIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-IntegrationName"><code>IntegrationName</code></a>, <a href="#parameter-DataFilter"><code>DataFilter</code></a>, <a href="#parameter-Description"><code>Description</code></a></td>
    <td>Modifies a zero-ETL integration with Amazon Redshift.</td>
</tr>
<tr>
    <td><a href="#delete_integration"><CopyableCode code="delete_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-IntegrationIdentifier"><code>IntegrationIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a zero-ETL integration with Amazon Redshift.</td>
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
<tr id="parameter-IntegrationIdentifier">
    <td><CopyableCode code="IntegrationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the integration.</td>
</tr>
<tr id="parameter-IntegrationName">
    <td><CopyableCode code="IntegrationName" /></td>
    <td><code>string</code></td>
    <td>The name of the integration.</td>
</tr>
<tr id="parameter-SourceArn">
    <td><CopyableCode code="SourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the database to use as the source for replication.</td>
</tr>
<tr id="parameter-TargetArn">
    <td><CopyableCode code="TargetArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Redshift data warehouse to use as the target for replication.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AdditionalEncryptionContext">
    <td><CopyableCode code="AdditionalEncryptionContext" /></td>
    <td><code>object</code></td>
    <td>An optional set of non-secret key–value pairs that contains additional contextual information about the data. For more information, see Encryption context in the Amazon Web Services Key Management Service Developer Guide. You can only include this parameter if you specify the KMSKeyId parameter.</td>
</tr>
<tr id="parameter-DataFilter">
    <td><CopyableCode code="DataFilter" /></td>
    <td><code>string</code></td>
    <td>A new data filter for the integration. For more information, see Data filtering for Aurora zero-ETL integrations with Amazon Redshift or Data filtering for Amazon RDS zero-ETL integrations with Amazon Redshift.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A new description for the integration.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more resources to return.</td>
</tr>
<tr id="parameter-IntegrationIdentifier">
    <td><CopyableCode code="IntegrationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the integration.</td>
</tr>
<tr id="parameter-IntegrationName">
    <td><CopyableCode code="IntegrationName" /></td>
    <td><code>string</code></td>
    <td>A new name for the integration.</td>
</tr>
<tr id="parameter-KMSKeyId">
    <td><CopyableCode code="KMSKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, RDS uses a default Amazon Web Services owned key.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeIntegrations request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_integrations"
    values={[
        { label: 'describe_integrations', value: 'describe_integrations' }
    ]}
>
<TabItem value="describe_integrations">

Describe one or more zero-ETL integrations with Amazon Redshift.

```sql
SELECT
additional_encryption_context,
create_time,
data_filter,
description,
errors,
integration_arn,
integration_name,
kms_key_id,
source_arn,
status,
tags,
target_arn
FROM aws.rds.integrations
WHERE region = '{{ region }}' -- required
AND IntegrationIdentifier = '{{ IntegrationIdentifier }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_integration"
    values={[
        { label: 'create_integration', value: 'create_integration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_integration">

Creates a zero-ETL integration with Amazon Redshift.

```sql
INSERT INTO aws.rds.integrations (
SourceArn,
TargetArn,
IntegrationName,
region,
KMSKeyId,
AdditionalEncryptionContext,
Tags,
DataFilter,
Description
)
SELECT 
'{{ SourceArn }}',
'{{ TargetArn }}',
'{{ IntegrationName }}',
'{{ region }}',
'{{ KMSKeyId }}',
'{{ AdditionalEncryptionContext }}',
'{{ Tags }}',
'{{ DataFilter }}',
'{{ Description }}'
RETURNING
additional_encryption_context,
create_time,
data_filter,
description,
errors,
integration_arn,
integration_name,
kms_key_id,
source_arn,
status,
tags,
target_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: integrations
  props:
    - name: SourceArn
      value: "{{ SourceArn }}"
      description: Required parameter for the integrations resource.
    - name: TargetArn
      value: "{{ TargetArn }}"
      description: Required parameter for the integrations resource.
    - name: IntegrationName
      value: "{{ IntegrationName }}"
      description: Required parameter for the integrations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the integrations resource.
    - name: KMSKeyId
      value: "{{ KMSKeyId }}"
      description: The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, RDS uses a default Amazon Web Services owned key.
      description: The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, RDS uses a default Amazon Web Services owned key.
    - name: AdditionalEncryptionContext
      value: "{{ AdditionalEncryptionContext }}"
      description: An optional set of non-secret key–value pairs that contains additional contextual information about the data. For more information, see Encryption context in the Amazon Web Services Key Management Service Developer Guide. You can only include this parameter if you specify the KMSKeyId parameter.
      description: An optional set of non-secret key–value pairs that contains additional contextual information about the data. For more information, see Encryption context in the Amazon Web Services Key Management Service Developer Guide. You can only include this parameter if you specify the KMSKeyId parameter.
    - name: Tags
      value: "{{ Tags }}"
    - name: DataFilter
      value: "{{ DataFilter }}"
      description: Data filtering options for the integration. For more information, see Data filtering for Aurora zero-ETL integrations with Amazon Redshift or Data filtering for Amazon RDS zero-ETL integrations with Amazon Redshift.
      description: Data filtering options for the integration. For more information, see Data filtering for Aurora zero-ETL integrations with Amazon Redshift or Data filtering for Amazon RDS zero-ETL integrations with Amazon Redshift.
    - name: Description
      value: "{{ Description }}"
      description: A description of the integration.
      description: A description of the integration.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_integration"
    values={[
        { label: 'modify_integration', value: 'modify_integration' }
    ]}
>
<TabItem value="modify_integration">

Modifies a zero-ETL integration with Amazon Redshift.

```sql
UPDATE aws.rds.integrations
SET 
-- No updatable properties
WHERE 
IntegrationIdentifier = '{{ IntegrationIdentifier }}' --required
AND region = '{{ region }}' --required
AND IntegrationName = '{{ IntegrationName}}'
AND DataFilter = '{{ DataFilter}}'
AND Description = '{{ Description}}'
RETURNING
additional_encryption_context,
create_time,
data_filter,
description,
errors,
integration_arn,
integration_name,
kms_key_id,
source_arn,
status,
tags,
target_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_integration"
    values={[
        { label: 'delete_integration', value: 'delete_integration' }
    ]}
>
<TabItem value="delete_integration">

Deletes a zero-ETL integration with Amazon Redshift.

```sql
DELETE FROM aws.rds.integrations
WHERE IntegrationIdentifier = '{{ IntegrationIdentifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
