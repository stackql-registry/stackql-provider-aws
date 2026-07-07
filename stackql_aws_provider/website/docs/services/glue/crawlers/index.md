--- 
title: crawlers
hide_title: false
hide_table_of_contents: false
keywords:
  - crawlers
  - glue
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

Creates, updates, deletes, gets or lists a <code>crawlers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="crawlers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.crawlers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_crawlers"
    values={[
        { label: 'batch_get_crawlers', value: 'batch_get_crawlers' },
        { label: 'get_crawler', value: 'get_crawler' }
    ]}
>
<TabItem value="batch_get_crawlers">

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
    <td><CopyableCode code="Crawlers" /></td>
    <td><code>array</code></td>
    <td>A list of crawler definitions.</td>
</tr>
<tr>
    <td><CopyableCode code="CrawlersNotFound" /></td>
    <td><code>array</code></td>
    <td>A list of names of crawlers that were not found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_crawler">

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
    <td><CopyableCode code="Classifiers" /></td>
    <td><code>array</code></td>
    <td>A list of UTF-8 strings that specify the custom classifiers that are associated with the crawler.</td>
</tr>
<tr>
    <td><CopyableCode code="Configuration" /></td>
    <td><code>string</code></td>
    <td>Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior. For more information, see Setting crawler configuration options.</td>
</tr>
<tr>
    <td><CopyableCode code="CrawlElapsedTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>If the crawler is running, contains the total time elapsed since the last crawl began.</td>
</tr>
<tr>
    <td><CopyableCode code="CrawlerSecurityConfiguration" /></td>
    <td><code>string</code></td>
    <td>The name of the SecurityConfiguration structure to be used by this crawler.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the crawler was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DatabaseName" /></td>
    <td><code>string</code></td>
    <td>The name of the database in which the crawler's output is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the crawler. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LakeFormationConfiguration" /></td>
    <td><code>object</code></td>
    <td>Specifies whether the crawler should use Lake Formation credentials for the crawler instead of the IAM role credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="LastCrawl" /></td>
    <td><code>object</code></td>
    <td>The status of the last crawl, and potentially error information if an error occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the crawler was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="LineageConfiguration" /></td>
    <td><code>object</code></td>
    <td>A configuration that specifies whether data lineage is enabled for the crawler.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the crawler. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RecrawlPolicy" /></td>
    <td><code>object</code></td>
    <td>A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.</td>
</tr>
<tr>
    <td><CopyableCode code="Role" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data.</td>
</tr>
<tr>
    <td><CopyableCode code="Schedule" /></td>
    <td><code>object</code></td>
    <td>For scheduled crawlers, the schedule when the crawler runs.</td>
</tr>
<tr>
    <td><CopyableCode code="SchemaChangePolicy" /></td>
    <td><code>object</code></td>
    <td>The policy that specifies update and delete behaviors for the crawler.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the crawler is running, or whether a run is pending. (READY, RUNNING, STOPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="TablePrefix" /></td>
    <td><code>string</code></td>
    <td>The prefix added to the names of tables that are created.</td>
</tr>
<tr>
    <td><CopyableCode code="Targets" /></td>
    <td><code>object</code></td>
    <td>A collection of targets to crawl.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the crawler.</td>
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
    <td><a href="#batch_get_crawlers"><CopyableCode code="batch_get_crawlers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of resource metadata for a given list of crawler names. After calling the ListCrawlers operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</td>
</tr>
<tr>
    <td><a href="#get_crawler"><CopyableCode code="get_crawler" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves metadata for a specified crawler.</td>
</tr>
<tr>
    <td><a href="#create_crawler"><CopyableCode code="create_crawler" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the s3Targets field, the jdbcTargets field, or the DynamoDBTargets field.</td>
</tr>
<tr>
    <td><a href="#update_crawler_schedule"><CopyableCode code="update_crawler_schedule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CrawlerName"><code>CrawlerName</code></a></td>
    <td></td>
    <td>Updates the schedule of a crawler using a cron expression.</td>
</tr>
<tr>
    <td><a href="#update_crawler"><CopyableCode code="update_crawler" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a crawler. If a crawler is running, you must stop it using StopCrawler before updating it.</td>
</tr>
<tr>
    <td><a href="#delete_crawler"><CopyableCode code="delete_crawler" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a specified crawler from the Glue Data Catalog, unless the crawler state is RUNNING.</td>
</tr>
<tr>
    <td><a href="#get_crawlers"><CopyableCode code="get_crawlers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves metadata for all crawlers defined in the customer account.</td>
</tr>
<tr>
    <td><a href="#list_crawlers"><CopyableCode code="list_crawlers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the names of all crawler resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</td>
</tr>
<tr>
    <td><a href="#start_crawler_schedule"><CopyableCode code="start_crawler_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CrawlerName"><code>CrawlerName</code></a></td>
    <td></td>
    <td>Changes the schedule state of the specified crawler to SCHEDULED, unless the crawler is already running or the schedule state is already SCHEDULED.</td>
</tr>
<tr>
    <td><a href="#stop_crawler_schedule"><CopyableCode code="stop_crawler_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CrawlerName"><code>CrawlerName</code></a></td>
    <td></td>
    <td>Sets the schedule state of the specified crawler to NOT_SCHEDULED, but does not stop the crawler if it is already running.</td>
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
    defaultValue="batch_get_crawlers"
    values={[
        { label: 'batch_get_crawlers', value: 'batch_get_crawlers' },
        { label: 'get_crawler', value: 'get_crawler' }
    ]}
>
<TabItem value="batch_get_crawlers">

Returns a list of resource metadata for a given list of crawler names. After calling the ListCrawlers operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.

```sql
SELECT
Crawlers,
CrawlersNotFound
FROM aws.glue.crawlers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_crawler">

Retrieves metadata for a specified crawler.

```sql
SELECT
Classifiers,
Configuration,
CrawlElapsedTime,
CrawlerSecurityConfiguration,
CreationTime,
DatabaseName,
Description,
LakeFormationConfiguration,
LastCrawl,
LastUpdated,
LineageConfiguration,
Name,
RecrawlPolicy,
Role,
Schedule,
SchemaChangePolicy,
State,
TablePrefix,
Targets,
Version
FROM aws.glue.crawlers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_crawler"
    values={[
        { label: 'create_crawler', value: 'create_crawler' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_crawler">

Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the s3Targets field, the jdbcTargets field, or the DynamoDBTargets field.

```sql
INSERT INTO aws.glue.crawlers (
Name,
Role,
DatabaseName,
Description,
Targets,
Schedule,
Classifiers,
TablePrefix,
SchemaChangePolicy,
RecrawlPolicy,
LineageConfiguration,
LakeFormationConfiguration,
Configuration,
CrawlerSecurityConfiguration,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Role }}',
'{{ DatabaseName }}',
'{{ Description }}',
'{{ Targets }}',
'{{ Schedule }}',
'{{ Classifiers }}',
'{{ TablePrefix }}',
'{{ SchemaChangePolicy }}',
'{{ RecrawlPolicy }}',
'{{ LineageConfiguration }}',
'{{ LakeFormationConfiguration }}',
'{{ Configuration }}',
'{{ CrawlerSecurityConfiguration }}',
'{{ Tags }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: crawlers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the crawlers resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        Name of the new crawler.
    - name: Role
      value: "{{ Role }}"
      description: |
        The IAM role or Amazon Resource Name (ARN) of an IAM role used by the new crawler to access customer resources.
    - name: DatabaseName
      value: "{{ DatabaseName }}"
      description: |
        The Glue database where results are written, such as: arn:aws:daylight:us-east-1::database/sometable/*.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the new crawler.
    - name: Targets
      description: |
        A list of collection of targets to crawl.
      value:
        S3Targets:
          - Path: "{{ Path }}"
            Exclusions: "{{ Exclusions }}"
            ConnectionName: "{{ ConnectionName }}"
            SampleSize: {{ SampleSize }}
            EventQueueArn: "{{ EventQueueArn }}"
            DlqEventQueueArn: "{{ DlqEventQueueArn }}"
        JdbcTargets:
          - ConnectionName: "{{ ConnectionName }}"
            Path: "{{ Path }}"
            Exclusions: "{{ Exclusions }}"
            EnableAdditionalMetadata: "{{ EnableAdditionalMetadata }}"
        MongoDBTargets:
          - ConnectionName: "{{ ConnectionName }}"
            Path: "{{ Path }}"
            ScanAll: {{ ScanAll }}
        DynamoDBTargets:
          - Path: "{{ Path }}"
            scanAll: {{ scanAll }}
            scanRate: {{ scanRate }}
        CatalogTargets:
          - DatabaseName: "{{ DatabaseName }}"
            Tables: "{{ Tables }}"
            ConnectionName: "{{ ConnectionName }}"
            EventQueueArn: "{{ EventQueueArn }}"
            DlqEventQueueArn: "{{ DlqEventQueueArn }}"
        DeltaTargets:
          - DeltaTables: "{{ DeltaTables }}"
            ConnectionName: "{{ ConnectionName }}"
            WriteManifest: {{ WriteManifest }}
            CreateNativeDeltaTable: {{ CreateNativeDeltaTable }}
        IcebergTargets:
          - Paths: "{{ Paths }}"
            ConnectionName: "{{ ConnectionName }}"
            Exclusions: "{{ Exclusions }}"
            MaximumTraversalDepth: {{ MaximumTraversalDepth }}
        HudiTargets:
          - Paths: "{{ Paths }}"
            ConnectionName: "{{ ConnectionName }}"
            Exclusions: "{{ Exclusions }}"
            MaximumTraversalDepth: {{ MaximumTraversalDepth }}
    - name: Schedule
      value: "{{ Schedule }}"
      description: |
        A cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *).
    - name: Classifiers
      value:
        - "{{ Classifiers }}"
      description: |
        A list of custom classifiers that the user has registered. By default, all built-in classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.
    - name: TablePrefix
      value: "{{ TablePrefix }}"
      description: |
        The table prefix used for catalog tables that are created.
    - name: SchemaChangePolicy
      description: |
        The policy for the crawler's update and deletion behavior.
      value:
        UpdateBehavior: "{{ UpdateBehavior }}"
        DeleteBehavior: "{{ DeleteBehavior }}"
    - name: RecrawlPolicy
      description: |
        A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.
      value:
        RecrawlBehavior: "{{ RecrawlBehavior }}"
    - name: LineageConfiguration
      description: |
        Specifies data lineage configuration settings for the crawler.
      value:
        CrawlerLineageSettings: "{{ CrawlerLineageSettings }}"
    - name: LakeFormationConfiguration
      description: |
        Specifies Lake Formation configuration settings for the crawler.
      value:
        UseLakeFormationCredentials: {{ UseLakeFormationCredentials }}
        AccountId: "{{ AccountId }}"
    - name: Configuration
      value: "{{ Configuration }}"
      description: |
        Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior. For more information, see Setting crawler configuration options.
    - name: CrawlerSecurityConfiguration
      value: "{{ CrawlerSecurityConfiguration }}"
      description: |
        The name of the SecurityConfiguration structure to be used by this crawler.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags to use with this crawler request. You may use tags to limit access to the crawler. For more information about tags in Glue, see Amazon Web Services Tags in Glue in the developer guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_crawler_schedule"
    values={[
        { label: 'update_crawler_schedule', value: 'update_crawler_schedule' },
        { label: 'update_crawler', value: 'update_crawler' }
    ]}
>
<TabItem value="update_crawler_schedule">

Updates the schedule of a crawler using a cron expression.

```sql
UPDATE aws.glue.crawlers
SET 
CrawlerName = '{{ CrawlerName }}',
Schedule = '{{ Schedule }}'
WHERE 
region = '{{ region }}' --required
AND CrawlerName = '{{ CrawlerName }}' --required;
```
</TabItem>
<TabItem value="update_crawler">

Updates a crawler. If a crawler is running, you must stop it using StopCrawler before updating it.

```sql
UPDATE aws.glue.crawlers
SET 
Name = '{{ Name }}',
Role = '{{ Role }}',
DatabaseName = '{{ DatabaseName }}',
Description = '{{ Description }}',
Targets = '{{ Targets }}',
Schedule = '{{ Schedule }}',
Classifiers = '{{ Classifiers }}',
TablePrefix = '{{ TablePrefix }}',
SchemaChangePolicy = '{{ SchemaChangePolicy }}',
RecrawlPolicy = '{{ RecrawlPolicy }}',
LineageConfiguration = '{{ LineageConfiguration }}',
LakeFormationConfiguration = '{{ LakeFormationConfiguration }}',
Configuration = '{{ Configuration }}',
CrawlerSecurityConfiguration = '{{ CrawlerSecurityConfiguration }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_crawler"
    values={[
        { label: 'delete_crawler', value: 'delete_crawler' }
    ]}
>
<TabItem value="delete_crawler">

Removes a specified crawler from the Glue Data Catalog, unless the crawler state is RUNNING.

```sql
DELETE FROM aws.glue.crawlers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_crawlers"
    values={[
        { label: 'get_crawlers', value: 'get_crawlers' },
        { label: 'list_crawlers', value: 'list_crawlers' },
        { label: 'start_crawler_schedule', value: 'start_crawler_schedule' },
        { label: 'stop_crawler_schedule', value: 'stop_crawler_schedule' }
    ]}
>
<TabItem value="get_crawlers">

Retrieves metadata for all crawlers defined in the customer account.

```sql
EXEC aws.glue.crawlers.get_crawlers 
@region='{{ region }}' --required 
@@json=
'{
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
<TabItem value="list_crawlers">

Retrieves the names of all crawler resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.

```sql
EXEC aws.glue.crawlers.list_crawlers 
@region='{{ region }}' --required 
@@json=
'{
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
<TabItem value="start_crawler_schedule">

Changes the schedule state of the specified crawler to SCHEDULED, unless the crawler is already running or the schedule state is already SCHEDULED.

```sql
EXEC aws.glue.crawlers.start_crawler_schedule 
@region='{{ region }}' --required 
@@json=
'{
"CrawlerName": "{{ CrawlerName }}"
}'
;
```
</TabItem>
<TabItem value="stop_crawler_schedule">

Sets the schedule state of the specified crawler to NOT_SCHEDULED, but does not stop the crawler if it is already running.

```sql
EXEC aws.glue.crawlers.stop_crawler_schedule 
@region='{{ region }}' --required 
@@json=
'{
"CrawlerName": "{{ CrawlerName }}"
}'
;
```
</TabItem>
</Tabs>
