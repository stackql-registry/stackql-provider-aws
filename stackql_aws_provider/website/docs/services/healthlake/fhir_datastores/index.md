--- 
title: fhir_datastores
hide_title: false
hide_table_of_contents: false
keywords:
  - fhir_datastores
  - healthlake
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

Creates, updates, deletes, gets or lists a <code>fhir_datastores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fhir_datastores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.healthlake.fhir_datastores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fhir_datastore"
    values={[
        { label: 'describe_fhir_datastore', value: 'describe_fhir_datastore' },
        { label: 'list_fhir_datastores', value: 'list_fhir_datastores' }
    ]}
>
<TabItem value="describe_fhir_datastore">

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
    <td><CopyableCode code="analytics_configuration" /></td>
    <td><code>object</code></td>
    <td>The analytics configuration for the data store.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the data store was created.</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) used in the creation of the data store. (pattern: &lt;code&gt;arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:healthlake:&#91;a-zA-Z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:datastore/.+?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_endpoint" /></td>
    <td><code>string</code></td>
    <td>A general-purpose string value. (pattern: &lt;code&gt;&#91;\P&#123;M&#125;\p&#123;M&#125;&#93;&#123;0,10000&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_id" /></td>
    <td><code>string</code></td>
    <td>The data store identifier. (pattern: &lt;code&gt;(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_name" /></td>
    <td><code>string</code></td>
    <td>The data store name. (pattern: &lt;code&gt;(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_status" /></td>
    <td><code>string</code></td>
    <td>The data store status. (CREATING, ACTIVE, DELETING, DELETED, CREATE_FAILED, UPDATING, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_type_version" /></td>
    <td><code>string</code></td>
    <td>The FHIR release version supported by the data store. Current support is for version R4. (R4)</td>
</tr>
<tr>
    <td><CopyableCode code="error_cause" /></td>
    <td><code>object</code></td>
    <td>The error cause for the current data store operation.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider_configuration" /></td>
    <td><code>object</code></td>
    <td>The identity provider selected during data store creation.</td>
</tr>
<tr>
    <td><CopyableCode code="nlp_configuration" /></td>
    <td><code>object</code></td>
    <td>The natural language processing (NLP) configuration for the data store.</td>
</tr>
<tr>
    <td><CopyableCode code="preload_data_config" /></td>
    <td><code>object</code></td>
    <td>The preloaded Synthea data configuration for the data store.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_configuration" /></td>
    <td><code>object</code></td>
    <td>The profile configuration for the data store.</td>
</tr>
<tr>
    <td><CopyableCode code="sse_configuration" /></td>
    <td><code>object</code></td>
    <td>The server-side encryption key configuration for a customer provided encryption key.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fhir_datastores">

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
    <td><CopyableCode code="datastore_properties_list" /></td>
    <td><code>array</code></td>
    <td>The properties associated with all listed data stores.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results. (pattern: &lt;code&gt;\p&#123;ASCII&#125;&#123;0,8192&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_fhir_datastore"><CopyableCode code="describe_fhir_datastore" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get properties for a FHIR-enabled data store.</td>
</tr>
<tr>
    <td><a href="#list_fhir_datastores"><CopyableCode code="list_fhir_datastores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all FHIR-enabled data stores in a user’s account, regardless of data store status.</td>
</tr>
<tr>
    <td><a href="#create_fhir_datastore"><CopyableCode code="create_fhir_datastore" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatastoreTypeVersion"><code>DatastoreTypeVersion</code></a></td>
    <td></td>
    <td>Create a FHIR-enabled data store.</td>
</tr>
<tr>
    <td><a href="#update_fhir_datastore"><CopyableCode code="update_fhir_datastore" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatastoreId"><code>DatastoreId</code></a></td>
    <td></td>
    <td>Update the properties of a FHIR-enabled data store.</td>
</tr>
<tr>
    <td><a href="#delete_fhir_datastore"><CopyableCode code="delete_fhir_datastore" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a FHIR-enabled data store.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_fhir_datastore"
    values={[
        { label: 'describe_fhir_datastore', value: 'describe_fhir_datastore' },
        { label: 'list_fhir_datastores', value: 'list_fhir_datastores' }
    ]}
>
<TabItem value="describe_fhir_datastore">

Get properties for a FHIR-enabled data store.

```sql
SELECT
analytics_configuration,
created_at,
datastore_arn,
datastore_endpoint,
datastore_id,
datastore_name,
datastore_status,
datastore_type_version,
error_cause,
identity_provider_configuration,
nlp_configuration,
preload_data_config,
profile_configuration,
sse_configuration
FROM aws.healthlake.fhir_datastores
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_fhir_datastores">

List all FHIR-enabled data stores in a user’s account, regardless of data store status.

```sql
SELECT
datastore_properties_list,
next_token
FROM aws.healthlake.fhir_datastores
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fhir_datastore"
    values={[
        { label: 'create_fhir_datastore', value: 'create_fhir_datastore' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fhir_datastore">

Create a FHIR-enabled data store.

```sql
INSERT INTO aws.healthlake.fhir_datastores (
DatastoreName,
DatastoreTypeVersion,
SseConfiguration,
PreloadDataConfig,
ClientToken,
Tags,
IdentityProviderConfiguration,
AnalyticsConfiguration,
NlpConfiguration,
ProfileConfiguration,
region
)
SELECT 
'{{ DatastoreName }}',
'{{ DatastoreTypeVersion }}' /* required */,
'{{ SseConfiguration }}',
'{{ PreloadDataConfig }}',
'{{ ClientToken }}',
'{{ Tags }}',
'{{ IdentityProviderConfiguration }}',
'{{ AnalyticsConfiguration }}',
'{{ NlpConfiguration }}',
'{{ ProfileConfiguration }}',
'{{ region }}'
RETURNING
datastore_arn,
datastore_endpoint,
datastore_id,
datastore_status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fhir_datastores
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the fhir_datastores resource.
    - name: DatastoreName
      value: "{{ DatastoreName }}"
      description: |
        The data store name (user-generated).
    - name: DatastoreTypeVersion
      value: "{{ DatastoreTypeVersion }}"
      description: |
        The FHIR release version supported by the data store. Current support is for version R4.
      valid_values: ['R4']
    - name: SseConfiguration
      description: |
        The server-side encryption key configuration for a customer-provided encryption key specified for creating a data store.
      value:
        KmsEncryptionConfig:
          CmkType: "{{ CmkType }}"
          KmsKeyId: "{{ KmsKeyId }}"
    - name: PreloadDataConfig
      description: |
        An optional parameter to preload (import) open source Synthea FHIR data upon creation of the data store.
      value:
        PreloadDataType: "{{ PreloadDataType }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        An optional user-provided token to ensure API idempotency.
    - name: Tags
      description: |
        The resource tags applied to a data store when it is created.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: IdentityProviderConfiguration
      description: |
        The identity provider configuration to use for the data store.
      value:
        AuthorizationStrategy: "{{ AuthorizationStrategy }}"
        FineGrainedAuthorizationEnabled: {{ FineGrainedAuthorizationEnabled }}
        Metadata: "{{ Metadata }}"
        IdpLambdaArn: "{{ IdpLambdaArn }}"
    - name: AnalyticsConfiguration
      description: |
        The analytics configuration for the data store.
      value:
        Status: "{{ Status }}"
    - name: NlpConfiguration
      description: |
        The natural language processing (NLP) configuration for the data store.
      value:
        Status: "{{ Status }}"
    - name: ProfileConfiguration
      description: |
        The profile configuration for the data store.
      value:
        DefaultProfiles:
          - "{{ DefaultProfiles }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_fhir_datastore"
    values={[
        { label: 'update_fhir_datastore', value: 'update_fhir_datastore' }
    ]}
>
<TabItem value="update_fhir_datastore">

Update the properties of a FHIR-enabled data store.

```sql
UPDATE aws.healthlake.fhir_datastores
SET 
DatastoreId = '{{ DatastoreId }}',
DatastoreName = '{{ DatastoreName }}',
AnalyticsConfiguration = '{{ AnalyticsConfiguration }}',
NlpConfiguration = '{{ NlpConfiguration }}',
ProfileConfiguration = '{{ ProfileConfiguration }}',
IdentityProviderConfiguration = '{{ IdentityProviderConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND DatastoreId = '{{ DatastoreId }}' --required
RETURNING
datastore_properties;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_fhir_datastore"
    values={[
        { label: 'delete_fhir_datastore', value: 'delete_fhir_datastore' }
    ]}
>
<TabItem value="delete_fhir_datastore">

Delete a FHIR-enabled data store.

```sql
DELETE FROM aws.healthlake.fhir_datastores
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
