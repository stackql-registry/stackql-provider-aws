--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - customer_profiles
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

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain"
    values={[
        { label: 'get_domain', value: 'get_domain' },
        { label: 'list_domains', value: 'list_domains' }
    ]}
>
<TabItem value="get_domain">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the domain was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataStore" /></td>
    <td><code>object</code></td>
    <td>True if data store is enabled for this domain.</td>
</tr>
<tr>
    <td><CopyableCode code="DeadLetterQueueUrl" /></td>
    <td><code>string</code></td>
    <td>The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultEncryptionKey" /></td>
    <td><code>string</code></td>
    <td>The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultExpirationDays" /></td>
    <td><code>integer</code></td>
    <td>The default number of days until the data within the domain expires.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the domain was most recently edited.</td>
</tr>
<tr>
    <td><CopyableCode code="Matching" /></td>
    <td><code>object</code></td>
    <td>The process of matching duplicate profiles. If Matching = true, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. After the Identity Resolution Job completes, use the GetMatches API to return and review the results. Or, if you have configured ExportingConfig in the MatchingRequest, you can download the results from S3.</td>
</tr>
<tr>
    <td><CopyableCode code="RuleBasedMatching" /></td>
    <td><code>object</code></td>
    <td>The process of matching duplicate profiles using the Rule-Based matching. If RuleBasedMatching = true, Amazon Connect Customer Profiles will start to match and merge your profiles according to your configuration in the RuleBasedMatchingRequest. You can use the ListRuleBasedMatches and GetSimilarProfiles API to return and review the results. Also, if you have configured ExportingConfig in the RuleBasedMatchingRequest, you can download the results from S3.</td>
</tr>
<tr>
    <td><CopyableCode code="Stats" /></td>
    <td><code>object</code></td>
    <td>Usage-specific statistics about the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_domains">

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
    <td><CopyableCode code="Items" /></td>
    <td><code>array</code></td>
    <td>The list of ListDomains instances.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous ListDomains API call.</td>
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
    <td><a href="#get_domain"><CopyableCode code="get_domain" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific domain.</td>
</tr>
<tr>
    <td><a href="#list_domains"><CopyableCode code="list_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Returns a list of all the domains for an AWS account that have been created.</td>
</tr>
<tr>
    <td><a href="#create_domain"><CopyableCode code="create_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DefaultExpirationDays"><code>DefaultExpirationDays</code></a></td>
    <td></td>
    <td>Creates a domain, which is a container for all customer data, such as customer profile attributes, object types, profile keys, and encryption keys. You can create multiple domains, and each domain can have multiple third-party integrations. Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain. Use this API or UpdateDomain to enable identity resolution: set Matching to true. To prevent cross-service impersonation when you call this API, see Cross-service confused deputy prevention for sample policies that you should apply. It is not possible to associate a Customer Profiles domain with an Amazon Connect Instance directly from the API. If you would like to create a domain and associate a Customer Profiles domain, use the Amazon Connect admin website. For more information, see Enable Customer Profiles. Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain.</td>
</tr>
<tr>
    <td><a href="#update_domain"><CopyableCode code="update_domain" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the properties of a domain, including creating or selecting a dead letter queue or an encryption key. After a domain is created, the name can’t be changed. Use this API or CreateDomain to enable identity resolution: set Matching to true. To prevent cross-service impersonation when you call this API, see Cross-service confused deputy prevention for sample policies that you should apply. To add or remove tags on an existing Domain, see TagResource/UntagResource.</td>
</tr>
<tr>
    <td><a href="#delete_domain"><CopyableCode code="delete_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specific domain and all of its customer data, such as customer profile attributes and their related objects.</td>
</tr>
<tr>
    <td><a href="#detect_profile_object_type"><CopyableCode code="detect_profile_object_type" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Objects"><code>Objects</code></a></td>
    <td></td>
    <td>The process of detecting profile object type mapping by using given objects.</td>
</tr>
<tr>
    <td><a href="#start_upload_job"><CopyableCode code="start_upload_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API starts the processing of an upload job to ingest profile data.</td>
</tr>
<tr>
    <td><a href="#stop_upload_job"><CopyableCode code="stop_upload_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API stops the processing of an upload job.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain containing the upload job to stop.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the upload job to stop.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects returned per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous ListDomain API call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_domain"
    values={[
        { label: 'get_domain', value: 'get_domain' },
        { label: 'list_domains', value: 'list_domains' }
    ]}
>
<TabItem value="get_domain">

Returns information about a specific domain.

```sql
SELECT
CreatedAt,
DataStore,
DeadLetterQueueUrl,
DefaultEncryptionKey,
DefaultExpirationDays,
DomainName,
LastUpdatedAt,
Matching,
RuleBasedMatching,
Stats,
Tags
FROM aws.customer_profiles.domains
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_domains">

Returns a list of all the domains for an AWS account that have been created.

```sql
SELECT
Items,
NextToken
FROM aws.customer_profiles.domains
WHERE region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_domain"
    values={[
        { label: 'create_domain', value: 'create_domain' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_domain">

Creates a domain, which is a container for all customer data, such as customer profile attributes, object types, profile keys, and encryption keys. You can create multiple domains, and each domain can have multiple third-party integrations. Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain. Use this API or UpdateDomain to enable identity resolution: set Matching to true. To prevent cross-service impersonation when you call this API, see Cross-service confused deputy prevention for sample policies that you should apply. It is not possible to associate a Customer Profiles domain with an Amazon Connect Instance directly from the API. If you would like to create a domain and associate a Customer Profiles domain, use the Amazon Connect admin website. For more information, see Enable Customer Profiles. Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain.

```sql
INSERT INTO aws.customer_profiles.domains (
DefaultExpirationDays,
DefaultEncryptionKey,
DeadLetterQueueUrl,
Matching,
RuleBasedMatching,
DataStore,
Tags,
domain_name,
region
)
SELECT 
{{ DefaultExpirationDays }} /* required */,
'{{ DefaultEncryptionKey }}',
'{{ DeadLetterQueueUrl }}',
'{{ Matching }}',
'{{ RuleBasedMatching }}',
'{{ DataStore }}',
'{{ Tags }}',
'{{ domain_name }}',
'{{ region }}'
RETURNING
CreatedAt,
DataStore,
DeadLetterQueueUrl,
DefaultEncryptionKey,
DefaultExpirationDays,
DomainName,
LastUpdatedAt,
Matching,
RuleBasedMatching,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domains
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the domains resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domains resource.
    - name: DefaultExpirationDays
      value: {{ DefaultExpirationDays }}
    - name: DefaultEncryptionKey
      value: "{{ DefaultEncryptionKey }}"
    - name: DeadLetterQueueUrl
      value: "{{ DeadLetterQueueUrl }}"
    - name: Matching
      description: |
        The flag that enables the matching process of duplicate profiles.
      value:
        Enabled: {{ Enabled }}
        JobSchedule:
          DayOfTheWeek: "{{ DayOfTheWeek }}"
          Time: "{{ Time }}"
        AutoMerging:
          Enabled: {{ Enabled }}
          Consolidation:
            MatchingAttributesList:
              - "{{ MatchingAttributesList }}"
          ConflictResolution:
            ConflictResolvingModel: "{{ ConflictResolvingModel }}"
            SourceName: "{{ SourceName }}"
          MinAllowedConfidenceScoreForMerging: {{ MinAllowedConfidenceScoreForMerging }}
        ExportingConfig:
          S3Exporting:
            S3BucketName: "{{ S3BucketName }}"
            S3KeyName: "{{ S3KeyName }}"
    - name: RuleBasedMatching
      description: |
        The request to enable the rule-based matching.
      value:
        Enabled: {{ Enabled }}
        MatchingRules:
          - Rule: "{{ Rule }}"
        MaxAllowedRuleLevelForMerging: {{ MaxAllowedRuleLevelForMerging }}
        MaxAllowedRuleLevelForMatching: {{ MaxAllowedRuleLevelForMatching }}
        AttributeTypesSelector:
          AttributeMatchingModel: "{{ AttributeMatchingModel }}"
          Address:
            - "{{ Address }}"
          PhoneNumber:
            - "{{ PhoneNumber }}"
          EmailAddress:
            - "{{ EmailAddress }}"
        ConflictResolution:
          ConflictResolvingModel: "{{ ConflictResolvingModel }}"
          SourceName: "{{ SourceName }}"
        ExportingConfig:
          S3Exporting:
            S3BucketName: "{{ S3BucketName }}"
            S3KeyName: "{{ S3KeyName }}"
    - name: DataStore
      description: |
        The data store request.
      value:
        Enabled: {{ Enabled }}
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_domain"
    values={[
        { label: 'update_domain', value: 'update_domain' }
    ]}
>
<TabItem value="update_domain">

Updates the properties of a domain, including creating or selecting a dead letter queue or an encryption key. After a domain is created, the name can’t be changed. Use this API or CreateDomain to enable identity resolution: set Matching to true. To prevent cross-service impersonation when you call this API, see Cross-service confused deputy prevention for sample policies that you should apply. To add or remove tags on an existing Domain, see TagResource/UntagResource.

```sql
UPDATE aws.customer_profiles.domains
SET 
DefaultExpirationDays = {{ DefaultExpirationDays }},
DefaultEncryptionKey = '{{ DefaultEncryptionKey }}',
DeadLetterQueueUrl = '{{ DeadLetterQueueUrl }}',
Matching = '{{ Matching }}',
RuleBasedMatching = '{{ RuleBasedMatching }}',
DataStore = '{{ DataStore }}',
Tags = '{{ Tags }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
RETURNING
CreatedAt,
DataStore,
DeadLetterQueueUrl,
DefaultEncryptionKey,
DefaultExpirationDays,
DomainName,
LastUpdatedAt,
Matching,
RuleBasedMatching,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain"
    values={[
        { label: 'delete_domain', value: 'delete_domain' }
    ]}
>
<TabItem value="delete_domain">

Deletes a specific domain and all of its customer data, such as customer profile attributes and their related objects.

```sql
DELETE FROM aws.customer_profiles.domains
WHERE domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detect_profile_object_type"
    values={[
        { label: 'detect_profile_object_type', value: 'detect_profile_object_type' },
        { label: 'start_upload_job', value: 'start_upload_job' },
        { label: 'stop_upload_job', value: 'stop_upload_job' }
    ]}
>
<TabItem value="detect_profile_object_type">

The process of detecting profile object type mapping by using given objects.

```sql
EXEC aws.customer_profiles.domains.detect_profile_object_type 
@domain_name='{{ domain_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Objects": "{{ Objects }}"
}'
;
```
</TabItem>
<TabItem value="start_upload_job">

This API starts the processing of an upload job to ingest profile data.

```sql
EXEC aws.customer_profiles.domains.start_upload_job 
@domain_name='{{ domain_name }}' --required, 
@job_id='{{ job_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_upload_job">

This API stops the processing of an upload job.

```sql
EXEC aws.customer_profiles.domains.stop_upload_job 
@domain_name='{{ domain_name }}' --required, 
@job_id='{{ job_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
